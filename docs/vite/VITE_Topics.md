# Vite

## Module 1: Fundamentals
- What is Vite? Phylosophy and differences with Webpack ✅
- Why is it so fast? Dev Server + ESM ✅
- Basic Project Structure with `vite@7` ✅

## Module 2: Environment Configuration
- `.env`, `.env.local`, `.env.production` files ✅
- Environment Variables with `VITE_` ✅
- Differences between `import.meta.env` and `process.env` ✅

## Module 3: Advance Environment Variables Handling
- Multiple custom environments (`staging`, `qa`, `beta`, etc)
- Loading variables dynamically regarding the environment with `defineConfig`
- Environment Variables' validation and typing.

## Module 4: `vite.config.ts` thoroughly
- Complete `defineConfig` structure
- Use of `mode`, `define`, `resolve.alias`, `build`, `plugins`
- Loading plugins dynamically regarding the environment
- config modular separation (eg: `vite.config.dev.ts`, `vite.config.prod.ts`)

## Module 5: Optimizing builds
- Build with `vite build` and analysis with `rollupOptions`
- Code splitting
- Bundle size reduction (`terserOptions`, `esbuild`, `chunkSizeWarningLimit`)
- Libraries tree-shaking
- `preload`, `prefetch`, `dynamic import()`

## Module 6: Sourcemaps and Debugging
- Activate sourcemaps for production
- Code mapping and legible errors in production
- Integration with Sentry, Bugsnag or TrackJS

## Module 7: Useful Vite plugins for React
- `@vitejs/plugin-react` and its options (JSX, fast refresh, etc)
- `vite-plugin-inspect`, `vite-plugin-compression`, `vite-plugin-env-compatible`, `vite-plugin-svgr`

## Module 8: DevOps with Vite
- Custom builds for different CI/CD (GitHub Actions, Netlify, Vercel)
- Safe Environment Variables per environment
- Caching and purging builds in pipelines
- Deploy preview with different `base`

## Module 9: Real cases and advance patterns
- Multi App or Microfrontends with Vite
- Usage with monorepos and `pnpm` workspaces
- SSR with React + Vite (eg: `vite-ssr`, `vite-plugin-ssr`)