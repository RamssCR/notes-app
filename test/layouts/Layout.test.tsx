import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Layout } from '@layouts/Layout'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@components/sidebar/Sidebar', () => ({
  Sidebar: () => <aside>Sidebar Component</aside>
}))

describe('Layout', () => {
  test('renders the sidebar and children', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Child Component</div>
        </Layout>
      </MemoryRouter>
    )

    expect(screen.getByText('Child Component')).toBeDefined()
  })

  test('renders without children', () => {
    const { container } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )

    expect(container.querySelector('aside')).toBeDefined()
  })
})