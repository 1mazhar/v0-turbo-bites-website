"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import {
  PIZZA_CHICKEN_TOPPING,
  PIZZA_CHEESE_TOPPING,
  WRAP_CHEESE_SLICE,
  LOADED_FRIES_EXTRAS,
} from "@/lib/menu-data"

export type CartItemExtra = {
  name: string
  price: number
  selected: boolean
}

export type CartItem = {
  key: string
  name: string
  basePrice: number
  quantity: number
  size?: string
  extraType: "pizza" | "wrap" | "loaded-fries" | "none"
  extras: CartItemExtra[]
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
  addItem: (item: Omit<CartItem, "key" | "quantity" | "extras">) => void
  removeItem: (key: string) => void
  updateQuantity: (key: string, delta: number) => void
  toggleExtra: (key: string, extraName: string) => void
  openCart: () => void
  closeCart: () => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const getExtrasForType = (extraType: CartItem["extraType"], size?: string): CartItemExtra[] => {
    if (extraType === "pizza" && size) {
      const sizeKey = size as keyof typeof PIZZA_CHICKEN_TOPPING
      return [
        { name: "Chicken Topping", price: PIZZA_CHICKEN_TOPPING[sizeKey] || PIZZA_CHICKEN_TOPPING.L, selected: false },
        { name: "Cheese Topping", price: PIZZA_CHEESE_TOPPING[sizeKey] || PIZZA_CHEESE_TOPPING.L, selected: false },
      ]
    }
    if (extraType === "wrap") {
      return [{ name: "Extra Cheese Slice", price: WRAP_CHEESE_SLICE, selected: false }]
    }
    if (extraType === "loaded-fries") {
      return LOADED_FRIES_EXTRAS.map((e) => ({ ...e, selected: false }))
    }
    return []
  }

  const addItem = useCallback((item: Omit<CartItem, "key" | "quantity" | "extras">) => {
    const key = `${item.name}-${item.size || "single"}-${item.basePrice}`
    
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      const extras = getExtrasForType(item.extraType, item.size)
      return [...prev, { ...item, key, quantity: 1, extras }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((i) => (i.key === key ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    })
  }, [])

  const toggleExtra = useCallback((key: string, extraName: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.key !== key) return item
        
        // For wraps, only allow one extra cheese slice (it's a toggle, not multiple)
        if (item.extraType === "wrap") {
          return {
            ...item,
            extras: item.extras.map((e) =>
              e.name === extraName ? { ...e, selected: !e.selected } : e
            ),
          }
        }
        
        // For other types, allow multiple extras
        return {
          ...item,
          extras: item.extras.map((e) =>
            e.name === extraName ? { ...e, selected: !e.selected } : e
          ),
        }
      })
    )
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = items.reduce((sum, item) => {
    const extrasTotal = item.extras
      .filter((e) => e.selected)
      .reduce((eSum, e) => eSum + e.price, 0)
    return sum + (item.basePrice + extrasTotal) * item.quantity
  }, 0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const clearCart = useCallback(() => setItems([]), [])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        toggleExtra,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
