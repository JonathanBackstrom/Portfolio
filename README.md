# Portfolio

Min personliga portfolio-hemsida. Byggd med ren HTML, CSS och JavaScript — inget ramverk, inget build-steg.

## Filstruktur

```
├── index.html      # All HTML (hero, om mig, projekt, kontakt)
├── css/
│   └── style.css   # Tema, layout, animationer, responsivitet
├── js/
│   └── main.js     # Scroll-animationer, header-effekt, mobilmeny
└── README.md
```

## Kör lokalt

Öppna `index.html` direkt i webbläsaren — det är allt. (Eller kör en lokal server, t.ex. `npx serve` eller VS Code-tillägget Live Server.)

## Publicera på GitHub Pages

1. Skapa ett repo på GitHub (heter det `<ditt-användarnamn>.github.io` hamnar sidan direkt på den adressen, annars på `<användarnamn>.github.io/<repo-namn>`).
2. Pusha koden:
   ```
   git add .
   git commit -m "Portfolio"
   git remote add origin https://github.com/<användarnamn>/<repo>.git
   git push -u origin main
   ```
3. På GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root)** → Spara.
4. Sidan är live efter någon minut.

## Anpassa

- **Innehåll:** Allt text-innehåll (sektioner, projektkort, länkar) ligger i `index.html`. Nya projekt läggs till som ett `<article class="card reveal">`-block i projektsektionen — kopiera ett befintligt kort och byt innehållet.
- **CV:** Lägg en `cv.pdf` i roten (hero-knappen länkar dit) — eller ta bort knappen.
- **Färgtema:** Alla färger ligger som CSS-variabler överst i `css/style.css` (`:root`). Byt `--accent` för en annan accentfärg, eller gör om hela paletten till ett ljust tema.
- **Typsnitt:** Google Fonts-länken finns i `<head>` i `index.html`; typsnittsnamnen i `--font-heading`/`--font-body` i CSS:en.
