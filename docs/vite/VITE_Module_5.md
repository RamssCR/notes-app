# Optimizing builds

## Tree-shaking
It's a process in which vite and esbuild/rollup remove unused code from imports, they only include 
what the code uses.

### Requirements for it to work
1. Pure ESModules (`import`/`export`)
   CommonJS (`require`) does not allow effective tree-shaking

2. Do not use the whole dependency.
   Example: import specific functions from a library instead of a default export.

## Bundle size reduction in Vite
Vite already applies optimizations by default, but you can enhance it by using:
1. `esbuild.drop`
    - Removes all `console.log` and `debugger` on production.
    - Useful for lightweight bundles.

2. `build.chunkSizeWarningLimit`
Vite notifies if a chunk surpasses 500Kb (by default), it can be adjusted:
```JS
build: {
    chunkSizeWarningLimit: 800
}
```

**NOTE:** use `vite-plugin-compression` to compress bundles into gzip format.
