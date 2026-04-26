import { createHashRouter, RouterProvider } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { InquiryPage } from './pages/InquiryPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ServicesPage } from './pages/ServicesPage'
import { ShopPage } from './pages/ShopPage'

const router = createHashRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'inquire', element: <InquiryPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
