# NEXORA TECH — Plataforma E-Commerce de Tecnología

NEXORA TECH es una plataforma web de comercio electrónico moderna, rápida e integral, orientada a productos de informática, smartphones y hardware de rendimiento. Ha sido concebida como una pieza clave de desarrollo web para el portafolio profesional de **Integra Devs**.

## 🚀 Características Principales

- **Arquitectura Vanilla Pura:** Desarrollado al 100% con HTML5 semántico, CSS3 modular y JavaScript ES6+ nativo, sin dependencias pesadas ni frameworks externos.
- **Catálogo Completo y Filtros Multicriterio:** Motor de búsqueda predictivo con filtrado cruzado por categoría, marca, rango de precio y ordenamiento reactivo (menor precio, mejor valorados, alfabético).
- **Vista de Detalle de Producto:** Galería con miniaturas intercambiables, selector dinámico de unidades con verificación de stock, tabs informativos (Descripción, Specs, Opiniones) y carrusel de artículos relacionados.
- **Persistencia en LocalStorage:** El carrito de compras, la lista de favoritos y el historial de compras se mantienen guardados y sincronizados de forma local entre recargas y pestañas.
- **Gestor de Cupones:** Soporte para cupones promocionales con validación (`NEXORA10` para un 10% de descuento en productos y `ENVIOGRATIS` para bonificación total del flete).
- **Checkout y Simulador Financiero en Tiempo Real:** Cálculo dinámico de recargos e intereses según la cantidad de cuotas seleccionadas (1 a 12 cuotas), con desglose de costo financiero y valor de cuota individual.
- **Auditoría de Órdenes DEMO:** Generación automática de números de tracking (`NX-2026-XXXXXX`) con consulta directa desde el panel de cuenta.

## 🛠️ Estructura del Proyecto

```text
nexora-tech/
├── index.html              # Home principal con hero y destacados
├── productos.html          # Catálogo general con sidebar de filtros
├── producto.html           # Ficha de producto dinámica
├── favoritos.html          # Colección de favoritos
├── carrito.html            # Gestión de compras y cupones
├── checkout.html           # Pasarela y cálculo de cuotas en vivo
├── confirmacion.html       # Recibo de compra
├── cuenta.html             # Panel de compras históricas
├── css/
│   ├── styles.css          # Estilos globales y componentes UI
│   └── responsive.css      # Reglas adaptativas de 320px a 1920px
├── js/
│   ├── data.js             # Base de datos del catálogo
│   ├── app.js              # Helpers, UI de badges y toasts
│   ├── products.js         # Lógica de filtrado y catálogo
│   ├── product-detail.js   # Galería y tabs del producto
│   ├── cart.js             # Carrito y validación de cupones
│   └── checkout.js         # Simulación de cuotas e intereses
├── IMAGE-SOURCES.md        # Atribución de imágenes
└── README.md
```

## ⚙️ Cómo Ejecutar en Local

1. Extraer el contenido del archivo zip.
2. Abrir directamente `index.html` en el navegador web o utilizar la extensión Live Server de Visual Studio Code.

## ☁️ Despliegue en Vercel

El proyecto está configurado con rutas relativas limpias para funcionar en Vercel sin necesidad de `build scripts`:
1. Subir la carpeta a un repositorio de GitHub.
2. En [Vercel](https://vercel.com/), seleccionar **Add New Project**.
3. Importar el repositorio.
4. En **Framework Preset**, mantener **Other**.
5. Presionar **Deploy**.
