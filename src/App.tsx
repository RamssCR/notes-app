import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DEV } from '@utils/env.config'
import { FPS } from '@components/debugger/FPS'
import { Notes } from '@views/Notes'
import { useLoadSettings } from '@hooks/useLoadSettings'
import { Button } from '@components/ui/Button'
import { Bug } from 'lucide-react'

/**
 * It's the main application component that sets up the routing for the app.
 * It uses React Router to define the routes and render the appropriate components.
 */
export const App = () => {
  useLoadSettings()

  return (
    <BrowserRouter>
      {DEV && <FPS />}
      {__IS_STAGING__ && (
        <Button
          className="fixed bottom-4 right-4 z-50 w-6 h-6 p-1"
          onClick={() => { throw new Error('Test error for Sentry') }}
        >
          <Bug className="text-primary size-full" />
        </Button>
      )}
      <Routes>
        <Route path="/:id?" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}