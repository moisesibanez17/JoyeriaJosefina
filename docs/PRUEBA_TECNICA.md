# Prueba Tecnica - INTEMPORAL

## Objetivo
Validar que la version actual cumple con localizacion en espanol latino, moneda en MXN y navegacion funcional entre paginas.

## Alcance de esta etapa

1. Navegacion principal conectada entre Inicio, Catalogo, Producto y Asesoria.
2. Precios visibles convertidos a formato MXN.
3. Base de ejecucion manual en `src/pages/prueba-tecnica.html`.

## Criterios de aceptacion

1. No hay labels de menu en ingles.
2. El logo en cada pagina redirige a Inicio.
3. El menu superior funciona con enlaces reales.
4. Los precios visibles muestran `MXN $`.

## Casos de prueba manual (smoke)

1. Abrir `src/pages/home.html` y navegar a Catalogo desde header.
2. Desde Catalogo, abrir Asesoria desde header.
3. Regresar a Inicio con el logo desde cualquiera de las paginas.
4. Verificar precios en `catalogo.html` y `producto.html`.

## Evidencia recomendada

1. Captura por pagina con header visible.
2. Captura de precios en MXN.
3. Video corto de navegacion completa.
