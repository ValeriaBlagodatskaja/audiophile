import { ReactNode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Checkout from './components/Checkout/Checkout'
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
    </>
  )
}

export default function Router() {
  const router = createBrowserRouter([
    {
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
      path: '/',
    },
    {
      element: (
        <Layout>
          <Headphones />
        </Layout>
      ),
      path: 'headphones',
    },
    {
      element: (
        <Layout>
          <Speakers />
        </Layout>
      ),
      path: 'speakers',
    },
    {
      element: (
        <Layout>
          <Earphones />
        </Layout>
      ),
      path: 'earphones',
    },
    {
      element: (
        <Layout>
          <ProductInfoPage />
        </Layout>
      ),
      path: ':slug',
    },
    {
      element: (
        <Layout>
          <Checkout />
        </Layout>
      ),
      path: '/checkout',
    },
  ])
  return <RouterProvider router={router} />
}
