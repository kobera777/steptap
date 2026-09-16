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

## Dónde se cambia cada cosa

Los **textos y listas** viven en `data/`; los **estilos** en un `.css` por página. Para cambiar un texto no hace falta tocar componentes.

| Quiero cambiar…                                  | Archivo                          |
| ------------------------------------------------ | -------------------------------- |
| Teléfono, dirección, redes, nombre de la escuela | `data/site.ts`                   |
| Menú (todas las páginas) y menú de la home       | `data/nav.ts`                    |
| Home: FAQ, niveles, tarjetas, marquesina, aренда (alquiler) | `data/home.ts`                   |
| О школе: valores, "чем живёт школа"              | `data/about.ts`                  |
| Направления: tarjetas de estilos                 | `data/directions.ts`             |
| Расписание: clases, niveles, días, horas         | `data/schedule.ts`               |
| Разбор песни: puntos del timeline                | `data/songAnalysis.ts`           |
| Álbumes de la galería                            | `data/gallery.ts` + fotos en `public/gallery/` |
| Colores y fuentes de todo el sitio               | `app/styles/tokens.css`          |
| Estilos de una página                            | `app/<página>/<página>.css` (home: `app/home.css`) |
| Cabecera y pie compartidos                       | `components/layout/SiteHeader.tsx`, `SiteFooter.tsx`, `site-chrome.css` |
| Cabecera de la home (con desplegables)           | `components/layout/HomeHeader.tsx` |
| Animaciones y Liquid Glass                       | `app/motion.css`, `components/motion/MotionEffects.tsx` |
| Título y descripción de una página (SEO)         | `export const metadata` en `app/<página>/page.tsx` |

> Pendiente de decidir: los niveles se llaman distinto en la home ("С НУЛЯ / НАЧИНАЮЩИЕ…", `data/home.ts`) y en el horario ("1.0 СТАРТ … 5.0 ПРОФИ", `data/schedule.ts`). Conviene elegir una sola nomenclatura.

## Cómo añadir una página nueva

1. Copia `app/about/` a `app/<nueva>/` y renombra `about.css` → `<nueva>.css` (y su `import`).
2. En `page.tsx`: cambia `metadata` (título y descripción), el contenido dentro de `<main className="…">`, y deja `<SiteHeader />` arriba y `<SiteFooter />` abajo.
3. Usa un prefijo propio para las clases CSS (ej. `nv-`), para no chocar con otras páginas.
4. Añade una línea en `data/nav.ts` → `mainNav`. Con eso aparece en el menú, en el pie y en el sitemap.
5. `npm run build` y revisa en el navegador a 1280 / 768 / 375 px.

## Publicar

Después de fusionar en `main`, desplegar a producción con:

```bash
vercel --prod --yes
```
