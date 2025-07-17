# Advanced Environment Variables in Vite

## Common Problem
```TS
const apiUrl = import.meta.env.VITE_API_URL // string | undefined
```

> If it doesn't exist?, If it's a whitespace or not a valid URL?

## Professional Solution: Validation + Typing

Step 1: Install `zod` to validate variables
```BASH
npm i zod
```

Step 2: Create `env.ts` with validation
```TS
import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_FEATURE_ENABLE: z.enum(['true', 'false']).default('false'),
  VITE_VERSION: z.string().optional()
})

const parsed = envSchema.safeParse(import.meta.env)

if (parsed.error) {
  console.error('Invalid environment variables:', parsed.error.format())
  throw new Error("Invalid environment variables")
}

export const ENV = parsed.data
```

> If a variable is missing or won't load, the build fails immediately

Step 3: Type `import.meta.env`
In `src/vite-env.d.ts`

```TS
/// <reference types="vite/client">

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_FEATURE_ENABLE: 'true' | 'false'
  readonly VITE_VERSION?: string
}
```

Step 4: Use `ENV` instead of `import.meta.env` directly
```TS
import { ENV } from '@utils/env.config'

if (ENV.VITE_FEATURE_ENABLE === 'true') {
  console.log('Active Feature')
}
```

## Customize `vite.config.ts` dynamically per environment
```TS
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "") // Includes variables without VITE_ as well

  return {
    base: mode === "production" ? "/mi-app" : "/",
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_VERSION || "dev"),
      __IS_STAGING__: JSON.stringify(mode === 'staging'),
    },
    plugins: [react()]
  }
})
```

## You can use this on your code:
```TS
declare const __APP_VERSION__: string
declare const __IS_STAGING__: boolean

console.log("Version:", __APP_VERSION__)
if (__IS_STAGING__) {
  console.log("Staging mode")
}
```

> This is sustituded at compiling time and it's not in `import.meta.env`

## CI/CD failsafe
```JSON
"scripts": {
  "check-env": "ts-node src/env.ts",
  "build": "npm run check-env && vite build"
}
```

> This prevents your pipeline from compiling with incorrect variables