import { Header } from "@components/editor/Header"
import { Layout } from "@layouts/Layout"
import { NoNotes } from "@components/editor/NoNotes"

/**
 * Renders a view to create and manage notes.
 * This component serves as a placeholder for the Notes page,
 * where users can add, edit, and view their notes.
 */
export const Notes = () => {
  return (
    <Layout>
      <section className="w-full h-full lg:col-span-3 xl:col-span-4 py-4 px-6 flex flex-col items-start">
        <Header />
        <NoNotes />
      </section>
    </Layout>
  )
}