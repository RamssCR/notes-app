# Build Optimization, Sourcemaps and Performance Analysis

## `build.target`
This property tells Vite how modern the final JS output should be. 

```TS
{
  build: { target: 'esnext' } // Modern, useful for modern browsers
  // target: 'es2020' // More conservative alternative
}
```

## Sourcemaps (`build.sourcemap`)
It lets you see the original code (TS or JSX) on production during code cleanup.

```TS
const isProduction = mode === 'production'
{
  build: { sourcemap: !isProduction } // Active only on development
}
```

Or if you need sourcemaps as well on production
```TS
{
  build: { sourcemap: true }
}
```

## Minification & `drop`
```TS
const isProduction = mode === 'production'
{
  esbuild: { drop: isProduction ? ['console', 'debugger'] : [] },
  build: { minify: isProduction ? 'esbuild' : false }
}
```

- `drop`: removes `console` and `debugger`
- `minify`: uses `esbuild` (faster) or `terser` (more configurable)

## `manualChunks` - Separate vendors
```TS
manualChunks(id) {
  if (id.includes('node_modules')) return 'vendor'
}
```

### Benefits
- `vendor.js` remains separated from your code
- It's cached in a CDN or a browser if it doesn't change
- Reduces TTI (Time to Interactive)

## Visualize your bundle
Install the visualization plugin

```BASH
npm i rollup-plugin-visualizer -D
```

```TS
import { visualizer } from 'rollup-plugin-visualizer'

plugins: [
  react(),
  tailwindcss(),
  tsconfigPaths(),
  visualizer({ open: true })
]
```
> This shows each module's size (`react`, `tailwind`, `MyApp.jsx`, etc.)