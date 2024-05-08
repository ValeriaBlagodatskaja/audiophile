import { CartProvider } from './components/Cart/context/CartContext'
import Router from './router'

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  )
}

export default App
