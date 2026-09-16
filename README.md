# STEP TAP — sitio web

Sitio de la escuela de baile STEP TAP. Next.js 16 (App Router), React 19, TypeScript, CSS plano. Publicado en Vercel: <https://steptap.vercel.app>.

## Comandos

```bash
npm run dev        # servidor local en http://localhost:3000
npm run build      # compila para producción (lo que hace Vercel)
npm run lint       # revisa el código
npm run typecheck  # revisa tipos de TypeScript
npm run format     # formatea el código con Prettier
```

## Dónde está cada cosa

| Quiero cambiar…            | Archivo                                   |
| -------------------------- | ----------------------------------------- |
| Teléfono, dirección, redes | `data/site.ts`                            |
| Álbumes de la galería      | `data/gallery.ts` + fotos en `public/gallery/` |
| Página de inicio           | `app/page.tsx` (textos) + `app/globals.css` (estilos) |
| О школе                    | `app/about/page.tsx`                      |
| Направления                | `app/directions/page.tsx`                 |
| Расписание                 | `app/schedule/page.tsx`                   |
| Cabecera y pie compartidos | `components/SiteHeader.tsx`, `components/SiteFooter.tsx`, `components/site-chrome.css` |
| Animaciones y Liquid Glass | `app/motion.css`, `components/motion/MotionEffects.tsx` |

> Esta tabla se irá actualizando conforme avance la limpieza del proyecto (los textos pasarán a `data/`, y cada página tendrá su propio `.css`).

## Publicar

Después de fusionar en `main`, desplegar a producción con:

```bash
vercel --prod --yes
```
