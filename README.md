# Santa Cecilia

An original luxury restaurant concept inspired by the architectural character of reference photographs: aged brick, plaster and fresco fragments, an intimate nave, a slender brass chandelier and an open kitchen on the altar. Gothic vaults, stained glass, velvet seating and planting are original reinterpretations.

## Development

Node.js 20.19+ or 22.12+ is required by Vite.

```sh
npm ci
npm run dev
npm run check
npm run build
```

## Visual experience

The default experience uses two original AI-generated photoreal concept images, locally hosted as optimized WebP files in `public/images`. Scroll drives chandelier rotation, vertical movement, a crossfade into the room and a simulated camera push-in towards the kitchen. Subtle pointer parallax, ambient light and dust provide additional motion.

This is image-based cinematic animation, not a continuous physically rendered 3D camera shot or a photographic survey of the real restaurant. The two generated angles may differ in small architectural details. A fully consistent continuous shot requires a detailed shared 3D scene and an offline render sequence/video.

The procedural Three.js scene is lazy-loaded only if image loading fails. Its materials, reflections, shadows and chandelier were also refined. WebGL is needed only for that fallback. Google Fonts are optional; local font fallbacks are provided. Reduced-motion preferences disable ambient animation, pointer parallax and scroll interpolation; the motion control does the same. Explicit scrolling still selects the scene.

Booking and menu content are demonstrations. The form does not send reservations. No backend or credentials are needed.

## References

User-provided restaurant photographs inform atmosphere and material treatment only; they are not hosted or reproduced. Generated imagery depicts an original imagined Santa Cecilia.

Earlier research consulted [Bruno Simon's Folio 2019](https://github.com/brunosimon/folio-2019), especially its README and scene structure. Awwwards and the live reference website returned HTTP 403. No reference code or assets were copied.
