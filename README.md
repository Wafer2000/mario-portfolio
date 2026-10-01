# Mario Gonsalvez — Portafolio

Portafolio estático en Next.js con foto, proyectos, trayectoria, credenciales, repositorios, CV en español e inglés y demostraciones con datos de ejemplo. No requiere backend, claves ni variables de entorno.

## Ejecutar y validar

Instala Node.js 22 o superior. En PowerShell, dentro de esta carpeta:

```powershell
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run lint
pnpm run build
pnpm run dev
```

## GitHub y Vercel

1. Sube el contenido de esta carpeta a un repositorio GitHub. package.json debe quedar en la raíz.
2. En Vercel selecciona Add New → Project e importa ese repositorio.
3. Usa Next.js. La configuración incluida exporta la web a out. No agregues variables de entorno.
4. Pulsa Deploy. La integración GitHub–Vercel publicará los cambios de la rama de producción.

## Actualizar contenido

- lib/portfolio-data.ts: proyectos, experiencia, credenciales, tecnologías, contactos y repositorios.
- lib/portfolio-content.ts: perfil, presentación y rutas de foto y CV.
- public/assets/mario-portrait.webp: foto.
- public/cv/: CV en ambos idiomas.
- app/globals.css: diseño.

Los textos bilingües usan [español, inglés]. Las demostraciones son ejemplos, no conexiones con los productos reales. Añade imágenes en public/assets y usa /assets/nombre.webp. Valida y sube tus cambios a GitHub.
