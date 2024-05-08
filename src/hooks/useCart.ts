import { useContext } from 'react'

import { CartContext } from '../components/Cart/context/CartContext'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart should be used within CartContext')
  }
  return context
}
