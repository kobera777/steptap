@AGENTS.md

# Convenciones del proyecto

- **CSS plano**, un archivo por página (`app/<ruta>/<ruta>.css`) con prefijo propio de clases (`gal-`, `st-`, `schedule-`, `sc-`…). Nada de `<style jsx>` ni Tailwind.
- **Paleta y fuentes** solo en `app/styles/tokens.css` (cuando exista); en el resto, `var(--…)`. Nunca hex sueltos.
- **Contenido editable** (textos, listas, horarios, contactos, menú) en `data/*.ts`, no dentro de componentes.
- **Enlaces internos** siempre con `next/link`, nunca `<a href="/…">`.
- **Cabecera y pie**: `components/SiteHeader.tsx` / `SiteFooter.tsx` en todas las páginas interiores; el home tiene su cabecera propia.
- **Server components por defecto**; `"use client"` solo donde hay estado o eventos.
- Antes de cerrar un cambio: `npm run build`, `npm run lint`, revisar la página en el navegador a 1280 / 768 / 375 px.
- Idioma: el sitio está en ruso; los comentarios de código pueden ir en ruso o español; la comunicación con el dueño, en español.
