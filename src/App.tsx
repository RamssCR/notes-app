import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DEV } from '@utils/env.config'
import { FPS } from '@components/debugger/FPS'
import { Notes } from '@views/Notes'
import { useLoadSettings } from '@hooks/useLoadSettings'

/**
 * It's the main application component that sets up the routing for the app.
 * It uses React Router to define the routes and render the appropriate components.
 */
export const App = () => {
  useLoadSettings()

  return (
    <BrowserRouter>
      {DEV && <FPS />}
      <Routes>
        <Route path="/:id?" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}