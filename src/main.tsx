import { App } from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

console.log(`App Version: ${__APP_VERSION__}`);
if (__IS_STAGING__) {
  console.log('Running in staging mode');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
