import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import CategoryPage from '@/pages/Category/CategoryPage'
import Checkout from '@/pages/Checkout/CheckoutPage'
import Home from '@/pages/Home/Home'
import ProductInfoPage from '@/pages/ProductInfo/ProductInfoPage'
import { ReactNode } from 'react'
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom'

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default function Router() {
  const router = createBrowserRouter([
    {
      children: [
        { element: <Home />, index: true },
        { element: <CategoryPage category="headphones" />, path: 'headphones' },
        { element: <CategoryPage category="speakers" />, path: 'speakers' },
        { element: <CategoryPage category="earphones" />, path: 'earphones' },
        { element: <Checkout />, path: 'checkout' },
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
