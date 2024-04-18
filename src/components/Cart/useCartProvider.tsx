import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CartItem {
  id: number
  price: number
  quantity: number
  srcSet: {
    lg: string
    md: string
    sm: string
  }
  title: string
}

interface CartContextType {
  addToCart: (item: CartItem) => void
  cartItems: CartItem[]
  removeAllFromCart: () => void
  removeFromCart: (itemId: number) => void
  updateCartItemQuantity: (itemId: number, newQuantity: number) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const cartItemsJSON = localStorage.getItem('cartItems')
    if (cartItemsJSON) {
      setCartItems(JSON.parse(cartItemsJSON))
    }
  }, [])

  const updateCartItems = (items: CartItem[]) => {
    setCartItems(items)
    localStorage.setItem('cartItems', JSON.stringify(items))
  }

  const getCartItems = (): CartItem[] => {
    const cartItemsJSON = localStorage.getItem('cartItems')
    return cartItemsJSON ? JSON.parse(cartItemsJSON) : []
  }

  const addToCart = (item: CartItem): void => {
    const updatedItems = [...cartItems]
    const existingItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === item.id
    )
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems]
      updatedItems[existingItemIndex].quantity += item.quantity
      updateCartItems(updatedItems)
    } else {
      updatedItems.push(item)
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
    updateCartItems(updatedItems)
  }

  const removeFromCart = (itemId: number): void => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    updateCartItems(updatedItems)
  }

  const removeAllFromCart = (): void => {
    localStorage.removeItem('cartItems')
    updateCartItems([])
  }

  const updateCartItemQuantity = (
    itemId: number,
    newQuantity: number
  ): void => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    updateCartItems(updatedCartItems)
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems: getCartItems(),
        removeAllFromCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
