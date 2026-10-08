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

## Accessibility

Body copy uses 18px text with generous line spacing. Cinematic text remains fully opaque on a dark reading surface; no scroll-driven text fade or sticky reading deadline is used. Controls provide at least 44px targets, a visible keyboard focus, a skip-to-content link, labelled dialogs and form fields, and focus on the result after submitting the demonstration form. Reduced-motion mode removes ambient animation, camera transforms tied to scroll, interpolation and smooth scrolling; the scene switches between still images.

This iteration was checked with axe-core 4.10.3 against WCAG 2 A/AA, 2.1 AA and 2.2 AA rules on desktop, mobile and the booking dialog: no automated violations found. Manual browser checks covered keyboard navigation, Escape to close dialogs, reflow at 320px and a narrow/short viewport, opaque text through scrolling and reduced-motion behavior. These checks are not a complete WCAG conformance certification.
