# 📝 Note App

![Pull Request Automation](https://github.com/RamssCR/notes-app/actions/workflows/unit-testing.yaml/badge.svg)

Una aplicación de notas minimalista construida para aplicar y demostrar conocimientos avanzados en desarrollo frontend moderno. Este proyecto se desarrolló con enfoque en:

- Configuración multientorno (`development` / `production`)
- Loggers personalizados y envío de errores a Sentry + Discord
- Optimización de builds con Vite
- Code splitting y lazy loading
- Análisis de bundles con plugins como `rollup-plugin-visualizer`

---

## 🚀 Tecnologías principales

| Tecnología        | Propósito                                                  |
|-------------------|------------------------------------------------------------|
| `React`           | Librería principal para construir la UI                    |
| `Vite`            | Bundler ultrarrápido para desarrollo y producción          |
| `Zustand`         | State manager simple y performante                         |
| `Framer Motion`   | Animaciones suaves y expresivas                            |
| `TailwindCSS`     | Framework de estilos utilitario                            |
| `Radix UI`        | Accesibilidad y componentes de UI sin estilos              |
| `localStorage`    | Persistencia local del estado                              |

---

## 📦 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/RamssCR/note-app.git

# 2. Entra al proyecto
cd note-app

# 3. Instala las dependencias
npm install
```

## 🧪 Comandos de desarrollo

```BASH
# Ejecutar en modo desarrollo
npm run dev

# Build optimizado para producción
npm run build

# Vista previa de build local
npm run preview

# Ejecutar pruebas unitarias
npm run test

# Genera un reporte de coverage
npm run test:coverage
```
