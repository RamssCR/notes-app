# VITE - Fundamentals

## What is Vite?
> Vite (in french `fast`) is a modern build tool that enhances development time using native ESM and builds your app with Rollup for production

## Main Features
- Instant Development Server (No bundling, thanks to ES Modules)
- Ultra fast HMR (Hot Module Replacement)
- Super optimized builds with Rollup
- Native support for TypeScript, JSX, CSS Modules, Sass, PostCSS
- Plug-and-play with React, Vue, Preact, Svelte, SolidJS, Lit, etc...

## Why is it so fast in development?
The key is that Vite doesn't do bundling in development.

### Vite vs. Webpack comparison

| Feature         | Webpack                       | Vite                                     |
|-----------------|-------------------------------|------------------------------------------|
| Dev Server      | Does complete bundling        | Uses ESM Directly                        |
| HMR             | Can be slow in big projects   | It recompiles the changed module, only   |
| Build           | Uses Webpack                  | Uses Rollup (more efficient and modular) |
| Configuration   | Verbose                       | Cleaner and centered on modern apps      |

## Basic project structure with Vite + React
```BASH
my-app/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ .env
├─ vite.config.ts
├─ tsconfig.json
└─ package.json
```

### Fast Initialization
```BASH
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

### What does Vite do internally?
1. Launches an Express-like server in `localhost:5173`
2. Uses **ESBuild** to transpile all modules on the fly
3. There's no complete bundling, it only transpile the ones you visit
4. Uses intelligent **HTTP Caching** with `304 Not Modified` to avoid recompiling everything
5. If you makes changes on one file, Vite reloads only that module thanks to its granular HMR