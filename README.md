# Pokedeck

A free Pokédex tracker for your Pokémon collection. Pick a game, tap a Pokémon to mark it as caught, and tap the star to mark it as shiny. It also tracks regional forms, Mega Stones and Z-Crystals.

## Two versions

| Version | Link | Good for |
| --- | --- | --- |
| **Web version** | https://allisttic2.github.io/Pokedeck/ | Just open it in any browser. Nothing to install. |
| **App version** | https://allisttic2.github.io/Pokedeck/app/ | Install it on your home screen. Opens full-screen and keeps working offline for everything you have already viewed. |

Both versions are the same tracker. The app version simply adds the install button and offline support.

## Install the app version

- **Android (Chrome):** open the app link, tap the menu (⋮) and choose *Install app*, or tap the *Install app* button on the page.
- **iPhone / iPad (Safari):** open the app link, tap Share, then *Add to Home Screen*.
- **Computer (Chrome or Edge):** click the install icon in the address bar, or the *Install app* button on the page.

## Download

Click the green **Code** button on this page and choose **Download ZIP**. Unzip it and open `index.html` (web version) or `app/index.html` (app version) in your browser. An internet connection is still needed the first time, because names and pictures are loaded from PokeAPI.

## Your data

Your progress is saved only in your own browser on your own device. It is not uploaded anywhere, so there are no accounts. Clearing your browser data erases it, and progress does not sync between devices. On some devices (for example iPhone) the installed app and the website keep separate lists.

## Hosting your own copy

1. Fork or download this repository.
2. In your repository go to *Settings → Pages*, choose the `main` branch and the `/ (root)` folder, and save.
3. In both `index.html` files, replace the address in the `og:url`, `og:image` and `twitter:image` lines with your own.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The web version |
| `og-image.png` | Preview picture shown when a link is shared |
| `app/index.html` | The app version |
| `app/manifest.webmanifest` | Lets browsers install the app |
| `app/sw.js` | Offline support for the app |
| `app/*.png` | App icons |

## Credits and disclaimer

Names, sprites and Pokédex data come from [PokeAPI](https://pokeapi.co). Shiny-lock information is based on [Serebii.net](https://www.serebii.net/games/shiny.shtml) and may be out of date. Fonts: Fredoka and Nunito (SIL Open Font License), served by Google Fonts.

This is an unofficial fan project. It is not affiliated with, endorsed by or sponsored by Nintendo, Game Freak, Creatures Inc. or The Pokémon Company. Pokémon and all related names and images are trademarks and copyrights of their respective owners.
