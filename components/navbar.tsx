"use client"

import { useCart } from "@/lib/cart-context"

export function Navbar() {
  const { totalItems, openCart } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-[#080808]/95 backdrop-blur-lg border-b border-red-500/15 px-4 md:px-12 h-[68px] flex items-center justify-between">
      <a href="#" className="font-[family-name:var(--font-bebas)] text-3xl tracking-widest text-red-500 no-underline">
        TURBO<span className="text-white">BITES</span>
      </a>
      
      <div className="flex items-center gap-4">
        <button
          onClick={openCart}
          className="relative bg-red-500/10 border border-red-500/30 text-white rounded-xl px-4 py-2.5 flex items-center gap-2 font-bold text-sm tracking-wide uppercase hover:bg-red-500 hover:text-white hover:border-red-500 transition-all hover:-translate-y-0.5"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Cart
          <span className="bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1.5">
            {totalItems}
          </span>
        </button>
      </div>
    </nav>
  )
}
