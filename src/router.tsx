import { ReactNode } from 'react'
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom'

import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Earphones from './pages/Earphones'
import Headphones from './pages/Headphones'
import Home from './pages/Home/Home'
import ProductInfoPage from './pages/ProductInfo/ProductInfoPage'
import Speakers from './pages/Speakers'

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar /> {children}
      <Footer />
    </>
  )
}

export default function Router() {
  const router = createBrowserRouter([
    {
      children: [
        { element: <Home />, index: true },
        { element: <Headphones />, path: 'headphones' },
        { element: <Speakers />, path: 'speakers' },
        { element: <Earphones />, path: 'earphones' },
        { element: <Checkout />, path: 'checkout' },
        { element: <Headphones />, path: 'headphones' },
        { element: <ProductInfoPage />, path: ':slug' },
      ],
      element: (
        <Layout>
          <ScrollRestoration />
          <Outlet />
        </Layout>
      ),
    },
  ])
  return <RouterProvider router={router} />
}
