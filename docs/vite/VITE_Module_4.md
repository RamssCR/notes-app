# `vite.config.ts` thoroughly

## General Structure
```TS
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isProd = mode === 'production'

  return {
    plugins: [],
    define: {},
    server: {},
    build: {},
    resolve: {},
    css: {},
    test: {}
  }
})
```

## `define`
It's useful to inject constants at compile time

```TS
define: {
  __APP_VERSION__: JSON.stringify(env.VITE_VERSION),
  __IS_STAGING__: JSON.stringify(mode === 'staging'),
}
```

## `resolve`
It lets you set up aliases

```TS
resolve: {
  alias: {
    '@': '/src',
    '@components': '/src/components',
  },
}
```

This enhances DX and prevents relative imports like `../../../`.

## `css`
You can extend PostCSS, Tailwind & CSS Modules configuration.

```TS
css: {
  modules: {
    localsConvention: 'camelCaseOnly',
  },
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/styles/variables.scss";`,
    },
  },
}
```

## `server`
Ideal for local development

```TS
server: {
  port: 3000,
  open: true,
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      changeOrigin: true,
    },
  },
}
```

## `build`
It lets you control the final build on `/dist`

```TS
build: {
  target: 'esnext',
  sourcemap: true,
  minify: 'esbuild',
  outDir: 'dist',
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return 'vendor'
        }
      },
    },
  },
}
```

## `test`
It lets you define coverage, environment, setup, etc...

```TS
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './test/setupTest.js',
  coverage: {
    provider: 'v8',
    reporter: ['text', 'html'],
  },
}
```