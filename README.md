# Santa Cecilia

An immersive restaurant concept built as a real-time Three.js Gothic church. Scrolling moves the camera from beneath a two-tier chandelier into the brick nave and towards an open kitchen on the altar. Includes rose windows, brass fittings, plants, intimate tables, animated dust and candlelight.

## Development

Node.js 20.19+ or 22.12+ is required by Vite.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
```

No backend or credentials are needed. The booking dialog is a demonstration and does not transmit reservations. Menu content is provisional. WebGL is required. Google Fonts are optional; local serif/sans-serif fallbacks are provided. Reduced-motion preferences disable ambient animation and camera interpolation; the on-screen control pauses ambient motion.

## Creative reference research

Awwwards' Three.js gallery and the Bruno Simon award page were requested during this iteration, but returned HTTP 403. Their current appearance and award information could not be inspected.

An accessible source studied was [Bruno Simon's Folio 2019](https://github.com/brunosimon/folio-2019), specifically its README and `src/javascript/World/index.js`: a Three.js world organised into physical objects and experiential sections. The design principle used here is a spatial experience rather than a sequence of photographic cards. Santa Cecilia's scene and camera choreography are original; no reference assets or code were copied.
