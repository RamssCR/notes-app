# Vite with DevOps
## Custom Builds with GitHub Actions + Firebase Hosting

> Automate build and deploy to Firebase from GitHub.

## What we need
  1. `.firebaserc`: Selects the project
  2. `firebase.json`: Configures the deploy
  3. `.github/workflows/firebase-deploy.yaml`: Workflow CI/CD

## `firebase.json` example:
```JSON
{
  "hosting": {
    "public": "dist",
    "cleanUrls": true,
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

## `.firebaserc` example:
```JSON
{
  "projects": {
    "default": "nombre-de-tu-proyecto-firebase"
  }
}
```

## `firebase-deploy.yaml`
```YAML
name: 🚀 Deploy to Firebase

on:
  pull-request:
    branches: [main]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Clone Repository
      - uses: actions/checkout@v4

      - name: Install Dependencies (Cleanly)
      - run: npm ci

      - name: Generate Vite Build (Ret-to-Deploy)
      - run: npm run build

      - name: Deploy to Firebase
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: "${{ secrets.GITHUB_TOKEN }}"
          firebaseServiceAccount: "${{ secrets.FIREBASE_SERVICE_ACCOUNT }}"
          channelId: preview
          projectId: firebase-project-id
```