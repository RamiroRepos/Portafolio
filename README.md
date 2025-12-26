# Portfolio Personal - Luis Cascante

Portfolio profesional desarrollado con Astro y Tailwind CSS, optimizado para GitHub Pages.

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- Git instalado
- Cuenta de GitHub

### Instalación

```bash
# 1. Crear proyecto Astro
npm create astro@latest portfolio-luis

# Cuando pregunte, selecciona:
# - Template: Empty
# - TypeScript: Yes (Strict)
# - Install dependencies: Yes
# - Initialize git: Yes

# 2. Navegar al directorio
cd portfolio-luis

# 3. Instalar Tailwind CSS
npx astro add tailwind
# Responde "Yes" a todas las preguntas

# 4. Instalar gh-pages para deployment
npm install -D gh-pages
```

## 📁 Estructura del Proyecto

```
portfolio-luis/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 📝 Configuración

### 1. Actualizar astro.config.mjs

Reemplaza `tuusuario` con tu nombre de usuario de GitHub y `portfolio-luis` con el nombre de tu repositorio:

```javascript
export default defineConfig({
  site: "https://tuusuario.github.io",
  base: "/portfolio-luis",
  integrations: [tailwind()],
});
```

### 2. Crear todos los archivos de componentes

Copia el contenido de cada componente que te he proporcionado:

- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/Hero.astro`
- `src/components/Experience.astro`
- `src/components/Skills.astro`
- `src/components/Education.astro`
- `src/components/Contact.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`

### 3. Actualizar package.json

Agrega el script de deploy:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.mjs` para personalizar la paleta de colores:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
      },
    },
  },
};
```

### Contenido

- **Hero.astro**: Actualiza tus enlaces de redes sociales
- **Contact.astro**: Integra Formspree o EmailJS para el formulario
- **Toda la información**: Ya está basada en tu CV, pero puedes ajustar según necesites

### Foto de perfil (Opcional)

1. Coloca tu foto en `/public/profile.jpg`
2. En `Hero.astro`, reemplaza el círculo con iniciales por:

```astro
<img
  src="/profile.jpg"
  alt="Luis Cascante"
  class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
/>
```

## 🌐 Deployment en GitHub Pages

### Opción 1: Usando GitHub Actions (Recomendado)

1. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Sube tu código a GitHub:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tuusuario/portfolio-luis.git
git push -u origin main
```

3. En GitHub, ve a Settings → Pages → Source → GitHub Actions

### Opción 2: Usando gh-pages

```bash
# Construir y desplegar
npm run deploy
```

Luego en GitHub: Settings → Pages → Source → Branch: gh-pages

## 🛠️ Comandos Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo en localhost:4321
npm run build        # Construye el sitio para producción
npm run preview      # Vista previa local del build de producción
npm run deploy       # Construye y despliega a GitHub Pages
```

## ✨ Características

- ✅ Diseño 100% responsive (móvil, tablet, escritorio)
- ✅ Optimizado para SEO
- ✅ Animaciones suaves y modernas
- ✅ Navegación fluida entre secciones
- ✅ Menu móvil funcional
- ✅ Basado en tu CV real
- ✅ Optimizado para rendimiento
- ✅ Código limpio y mantenible

## 📧 Integración de Formulario de Contacto

### Usando Formspree (Gratis)

1. Regístrate en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario
3. En `Contact.astro`, actualiza el form:

```astro
<form
  action="https://formspree.io/f/TU_FORM_ID"
  method="POST"
  class="space-y-4"
>
```

### Usando EmailJS

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Instala el SDK: `npm install @emailjs/browser`
4. Sigue la documentación de EmailJS

## 🔧 Solución de Problemas

### El sitio no se ve bien en GitHub Pages

Asegúrate de que en `astro.config.mjs`:

- `site` tenga tu URL de GitHub Pages
- `base` tenga el nombre correcto de tu repositorio

### Las rutas no funcionan

Si usas `base: '/portfolio-luis'`, todos los enlaces deben ser relativos o usar el helper de Astro.

### El build falla

```bash
# Limpia y reinstala
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📱 Próximos Pasos

1. **Añadir sección de Proyectos**: Muestra tu portafolio de trabajos
2. **Blog**: Añade artículos técnicos con Astro Content Collections
3. **Dark Mode**: Implementa tema oscuro
4. **Analytics**: Integra Google Analytics o Plausible
5. **SEO avanzado**: Añade Open Graph tags y Twitter Cards

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 👨‍💻 Autor

**Luis Carlos Cascante Calderón**

- Email: luis98ccc@gmail.com
- Teléfono: +506 8423-8634
- Ubicación: San José, Costa Rica

---

¿Necesitas ayuda? No dudes en contactarme. ¡Buena suerte con tu portfolio! 🚀
