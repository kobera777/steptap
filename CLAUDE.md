@AGENTS.md

# Convenciones del proyecto

- **CSS plano**, un archivo por página (`app/<ruta>/<ruta>.css`) con prefijo propio de clases (`gal-`, `st-`, `schedule-`, `sc-`…). Nada de `<style jsx>` ni Tailwind.
- **Paleta y fuentes** solo en `app/styles/tokens.css`; en el resto, `var(--…)`. Nunca hex sueltos.
- **Contenido editable** (textos, listas, horarios, contactos, menú) en `data/*.ts`, no dentro de componentes.
- **Enlaces internos** siempre con `next/link`, nunca `<a href="/…">`.
- **Cabecera y pie**: la cabecera es la misma (negra) en todo el sitio: `HomeHeader.tsx` con sus estilos en `components/layout/home-header.css`; las páginas interiores usan `SiteHeader.tsx`, que solo la envuelve. Pie: `SiteFooter.tsx`. El menú sale de `data/nav.ts` (`homeNav` para la cabecera, `mainNav` para pie y sitemap).
- **Server components por defecto**; `"use client"` solo donde hay estado o eventos.
- Antes de cerrar un cambio: `npm run build`, `npm run lint`, y la red de seguridad visual: `npm run shots:baseline` sobre `main` antes de empezar, `npm run shots` + `npm run shots:diff` al terminar (0 % salvo lo que el dueño haya aprobado). Ver README.
- Idioma: el sitio está en ruso; los comentarios de código pueden ir en ruso o español; la comunicación con el dueño, en español.
