"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/lib/cart-context"

export function Toast() {
  const { items } = useCart()
  const [show, setShow] = useState(false)
  const [lastItem, setLastItem] = useState("")
  const [prevLength, setPrevLength] = useState(0)

  useEffect(() => {
    if (items.length > prevLength && items.length > 0) {
      const newest = items[items.length - 1]
      setLastItem(newest.name + (newest.size ? ` (${newest.size})` : ""))
      setShow(true)
      const timer = setTimeout(() => setShow(false), 2500)
      return () => clearTimeout(timer)
    }
    setPrevLength(items.length)
  }, [items, prevLength])

  return (
    <div
      className={`fixed bottom-6 left-1/2 bg-black border border-orange-500/30 text-white px-6 py-3 rounded-full font-bold text-sm z-[500] whitespace-nowrap shadow-xl transition-transform duration-300 ${
        show ? "-translate-x-1/2 translate-y-0" : "-translate-x-1/2 translate-y-20"
      }`}
    >
      <span className="text-orange-400">{lastItem}</span> added to basket!
    </div>
  )
}
