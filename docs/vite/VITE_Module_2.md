# Environment Configuration

## What is an environment in Vite?
An environment defines the context in which your app runs in: `development`, `production`, `test`,
`staging`, etc...

Vite lets you use various `.env` files to customize variables per environment.

## Supported `.env` files
Vite loads automatically these files if any:

| File                  | Applies when...                          |
|-----------------------|------------------------------------------|
| `.env`                | Always (common base)                     |
| `.env.local`          | Always, but ignored by Git               |
| `.env.development`    | Only when running `vite`                 |
| `.env.production`     | Only when running `vite build`           |
| `.env.staging`        | Using `vite --mode staging`              |
| `.env.[mode].local`   | Custom + Ignored by Git                  |

> [!NOTE]
> Use `.env.local` or `.env.[mode].local` for sensitive variable (like API Keys).

## Environment Variable Syntax in Vite
```BASH
# Always starting with VITE_
VITE_API_URL=http://api.miapi.com
VITE_ANALYTICS_ID=UA-123456-1
```

> [!WARNING]
> Variables starting with `VITE_` are exposed to the frontend. Other variables like `SECRET_KEY` are automatically ignored.

## How to access variables
Use `import.meta.env` (not `process.env`) because Vite compiles with ES Modules.

```TS
console.log(import.meta.env.VITE_API_URL)
```

## Internal Vite Variables
```TS
import.meta.env.MODE // 'development', 'production', etc...
import.meta.env.BASE_URL // Base URL defined on vite.config
import.meta.env.DEV // true in development
import.meta.env.PROD // true in production
```

## Practical Example
`.env.development`
```BASH
VITE_API_URL=http://localhost:3000/api
```

`.env.production`
```BASH
VITE_API_URL=https://api.miapp.com/api
```

`src/services/user.ts`
```TS
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: [import.meta.env.VITE_API_URL, 'v1'].join('/'),
  headers: {
    'Content-Type': 'application/json'
  }
})

type User = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

/**
 * Logs the user into its account.
 * @param user - The user data.
 * @returns An axios response.
 */
export const login = async (user: User) => 
  await axiosInstance.post('/login', user)
```

## Changing mode (`mode`) manually

```BASH
vite --mode staging
vite build --mode qa
```

Vite will find `.env.staging` or `.env.qa`

## Best Practices
- Prefix all your public variables with `VITE_`
- Never put real secrets on a frontend `.env`
- Use `.env.local` for custom local development
- Define your environments on the `package.json` file

```JSON
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:staging": "vite build --mode staging",
  "preview": "vite preview"
}
```