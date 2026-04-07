# PaginaVentas

Proyecto organizado para iterar los conceptos de INTEMPORAL con una estructura legible y escalable.

## Estructura

- `src/pages/`: páginas editables principales.
- `src/assets/`: CSS y JS compartidos (base para siguientes refactors).
- `docs/`: decisiones y guía de mejora.

## Páginas

- `src/pages/index.html` - Hub de navegación local.
- `src/pages/home.html` - Inicio cinematográfico.
- `src/pages/catalogo.html` - Catálogo táctil.
- `src/pages/producto.html` - Detalle premium.
- `src/pages/asesoria.html` - Flujo guiado de asesoría.
- `src/pages/prueba-tecnica.html` - Base de prueba técnica.

## Documentación

- `docs/ARQUITECTURA.md` - Decisiones de estructura.
- `docs/PRUEBA_TECNICA.md` - Alcance y criterios de validación.

## Flujo recomendado

1. Editar únicamente archivos en `src/pages/`.
2. Extraer estilos repetidos hacia `src/assets/css/`.
3. Extraer comportamientos repetidos hacia `src/assets/js/`.
