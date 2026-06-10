# Galería de proyectos — capturas múltiples

Cada proyecto tiene su **propio directorio** dentro de `static/projects/`.
La app escanea esas carpetas y genera un carrusel automático.

## Estructura

```
static/projects/
├── simplify2/
│   ├── 001-dashboard.png
│   ├── 002-filtros.jpg
│   └── 003-reporte.gif
├── alumbrado-web/
│   ├── 001-mapas.jpg
│   └── 002-ordenes.png
├── alumbrado-mobile/
├── alumbrado-gps/
├── centro-control/
├── cartera-alumbrado/
├── appencuesta/
├── appencuesta-mobile/
├── votasoft/
├── domicilios/
├── cartas-pdf/
├── chatia/
└── songuiando/
```

## Regla de nombres (obligatoria)

Las imágenes deben empezar con **3 dígitos + guion**:

| Válido | Inválido |
|--------|----------|
| `001-capture.jpg` | `capture.jpg` |
| `002-dashboard.png` | `01-foto.png` |
| `003-demo.gif` | `1-demo.gif` |
| `010-detalle.webp` | `screenshot.png` |

Formatos soportados: **jpg, jpeg, png, gif, webp, avif, svg**

El orden del carrusel sigue el prefijo numérico (`001`, `002`, `003`…).

## IDs de proyecto (deben coincidir con la galería)

| Carpeta | Proyecto |
|---------|----------|
| `simplify2` | Simplify2+ |
| `alumbrado-web` | Alumbrado Público Web |
| `alumbrado-mobile` | App Conlus Móvil |
| `alumbrado-gps` | Alumbrado GPS — captura de puntos |
| `centro-control` | Centro de Control |
| `cartera-alumbrado` | Cartera Alumbrado |
| `appencuesta` | Appencuesta Web |
| `appencuesta-mobile` | Appencuesta Móvil |
| `votasoft` | VotaSoft |
| `domicilios` | App Domicilios |
| `cartas-pdf` | Generador Cartas PDF |
| `chatia` | ChatIA Corporativo |
| `songuiando` | Songuiando — cancionero personal |

## Sincronizar después de agregar imágenes

Cada vez que agregues o renombres capturas, ejecuta:

```bash
npm run gallery:sync
```

Esto regenera `src/lib/data/gallery-manifest.js` automáticamente.

- También se ejecuta al iniciar `npm run dev` y `npm run build`
- **En desarrollo**, si agregas imágenes con el servidor ya corriendo, la app las detecta y sincroniza sola (recarga la página)

> Si no ves imágenes nuevas: verifica el nombre (`001-nombre.jpg`) y reinicia `npm run dev` o ejecuta `npm run gallery:sync`

## Recomendaciones

- Usa **PNG/JPG/WebP** para pantallas estáticas (más livianas)
- Reserva **GIF** solo para flujos animados cortos
- Resolución sugerida: **1280×720** o **1920×1080** (16:9)
- Peso recomendado: **< 500 KB** por imagen estática, **< 3 MB** por GIF
