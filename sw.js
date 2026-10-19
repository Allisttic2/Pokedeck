// Pokedeck service worker: lets the app work offline and be installed.
const V = "pokedeck-shell-v1";
const IMG = "pokedeck-img-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== V && k !== IMG).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);

  // The app's own files: network first, so updates arrive straight away; cache as offline backup.
  if (u.origin === location.origin) {
    e.respondWith(
      fetch(r)
        .then(res => { const copy = res.clone(); caches.open(V).then(c => c.put(r, copy)); return res; })
        .catch(() => caches.match(r).then(m => m || caches.match("index.html")))
    );
    return;
  }

  // Sprites and fonts: cache first, so they also show offline and load fast.
  if (["raw.githubusercontent.com", "fonts.googleapis.com", "fonts.gstatic.com"].includes(u.hostname)) {
    e.respondWith(
      caches.open(IMG).then(c => c.match(r).then(m => {
        const net = fetch(r).then(res => { if (res.ok || res.type === "opaque") c.put(r, res.clone()); return res; }).catch(() => m);
        return m || net;
      }))
    );
  }
});
