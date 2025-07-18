import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Notes } from '@views/Notes'
import { useFontEffect } from '@hooks/useFontEffect'
import { useThemeEffect } from '@hooks/useThemeEffect'

/**
 * It's the main application component that sets up the routing for the app.
 * It uses React Router to define the routes and render the appropriate components.
 */
export const App = () => {
  useFontEffect()
  useThemeEffect()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id?" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}