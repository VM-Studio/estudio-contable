# Estudio Carrizo - Sitio Web Profesional

Sitio web elegante y profesional para estudio contable, construido con Next.js 16, TypeScript y Tailwind CSS v4.

## 🎨 Diseño Mejorado

Este sitio presenta un diseño moderno y profesional inspirado en las mejores prácticas de estudios contables:

- 🎨 **Paleta de colores profesional**: Azul corporativo (#1e40af) con acentos dorados
- ✨ **Hero impactante** con gradientes y estadísticas
- 🎯 **Cards de servicios** con iconos y animaciones hover
- � **100% Responsive** - perfecto en todos los dispositivos
- 🔝 **Header sticky** con navegación mejorada
- 💼 **CTAs destacados** para conversión

## �🚀 Características

- ✅ **Next.js 16** con App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS v4** para estilos modernos
- ✅ **Diseño elegante y profesional**
- ✅ **SEO optimizado** con metadata apropiada
- ✅ **Animaciones suaves** y efectos hover
- ✅ **Páginas principales** completas:
  - Inicio (Hero impactante, Servicios con iconos, Beneficios, CTA)
  - Servicios (8 servicios detallados con diseño mejorado)
  - Nosotros (Historia, Valores, Equipo)
  - Contacto (Formulario profesional e información)

## 📁 Estructura del Proyecto

```
estudio-contable/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout global
│   ├── globals.css           # Estilos globales
│   ├── servicios/
│   │   └── page.tsx          # Página de servicios
│   ├── nosotros/
│   │   └── page.tsx          # Página sobre nosotros
│   └── contacto/
│       └── page.tsx          # Página de contacto
├── components/
│   ├── Header.tsx            # Navegación principal
│   ├── Footer.tsx            # Footer del sitio
│   └── ServiceCard.tsx       # Tarjeta de servicio
├── types/
│   └── index.ts              # Tipos de TypeScript
└── public/                   # Archivos estáticos
```

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 16.0.8
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS v4
- **Fuentes:** Geist Sans & Geist Mono
- **Lint:** ESLint con configuración de Next.js

## 💻 Instalación y Desarrollo

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Personalización

### Modificar Servicios

Edita el array `services` en:
- `/app/page.tsx` (6 servicios en home)
- `/app/servicios/page.tsx` (8 servicios completos)

### Modificar Información de Contacto

Edita los datos en:
- `/components/Footer.tsx`
- `/app/contacto/page.tsx`

### Modificar Metadata

Edita el archivo `/app/layout.tsx` para cambiar el título y descripción del sitio.

## 📝 Próximos Pasos

Esta es la **estructura base** del sitio. Puedes agregar:

- 🎨 **Diseño elegante personalizado** con tu paleta de colores
- 📧 **Integración de formulario** con backend (API Route, email service)
- 🖼️ **Imágenes y logos** del estudio
- 📱 **Menú mobile** responsive
- ✨ **Animaciones** y transiciones
- 🔍 **Google Analytics** para tracking
- 📍 **Mapa de ubicación** en la página de contacto
- 💬 **Chat en vivo** o WhatsApp integration
- 📰 **Blog** para contenido actualizado

## 🚀 Deploy

La forma más sencilla de deployar es usando [Vercel](https://vercel.com):

```bash
npm run build
```

Luego conecta tu repositorio de GitHub con Vercel para deploys automáticos.

## 📄 Licencia

Este proyecto es privado y confidencial.
