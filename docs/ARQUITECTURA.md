# Arquitectura del Proyecto

## Objetivo
Ordenar los conceptos visuales para facilitar mantenimiento, pruebas y evolución.

## Convención de nombres

- Páginas: nombre funcional en minúsculas (`home.html`, `catalogo.html`, etc.).
- Assets: separar por tipo y propósito (`css/base.css`, `js/base-motion.js`).

## Próximo refactor sugerido

1. Crear `src/assets/css/base-theme.css` con tokens y reglas repetidas.
2. Crear `src/assets/js/base-motion.js` con reveal/parallax/tilt compartido.
3. Dejar en cada página solo comportamientos únicos de narrativa.
4. Unificar header/footer en fragmentos si se migra a motor de plantillas.

## Criterio de edición

- Cambios visuales globales: en `src/assets/`.
- Cambios de layout por página: en `src/pages/`.
