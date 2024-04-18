import { CartProvider } from './components/Cart/useCartProvider'
import Router from './router'

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  )
}

export default App
