import type { ReactNode } from "react"
import { Sidebar } from "@components/sidebar/Sidebar"

/**
 * Renders the main layout for the application.
 * This component includes the sidebar and a section for child components.
 */
export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5">
      <Sidebar />
      {children}
    </main>
  )
}