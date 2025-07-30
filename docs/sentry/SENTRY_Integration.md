# Sentry
## How to integrate Sentry to a Vite project

### 1. Activate `sourcemap` on `vite.config.{js,ts}`
```TS
{
  build: {
    sourcemap: true
  }
}
```

### 2. Install Sentry for React and integrate to `main.{jsx,tsx}`
Run the following command:
```BASH
npm install @sentry/react
```

And then, integrate this way:
```TSX
import * as Sentry from '@sentry/react'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

Sentry.init({
  dsn: import.meta.env.VITE_LOGGER_URL,
  sendDefaultPii: true,
})
```

### 3. Add the Sentry Plugin to the `vite.config.{js,ts}`
```TS
import { sentryVitePlugin } from '@sentry/vite-plugin'

plugins: [
  react(),
  tailwindcss(),
  paths(),
  sentryVitePlugin({
    org: 'organization-name',
    project: 'project-name-on-sentry',
    authToken: process.env.SENTRY_AUTH_TOKEN,
  }),
],
```

### 4. Install the CLI and follow all the steps
```BASH
npx @sentry/wizard@latest -i sourcemaps --saas --org [organization-name] --project [project-name]
```

* Sentry will generate a .env file which will contain the auth token for sourcemap logging.
* Sentry will ask you to integrate it on your CI/CD pipeline if any.
* The same way, it must be added to the build's deploy (to firebase, in this case).