"use client"

import { useCart } from "@/lib/cart-context"
import type { MenuItem, SizedMenuItem, MenuCategory } from "@/lib/menu-data"

type FoodCardProps = {
  item: MenuItem
  extraType: MenuCategory["extraType"]
}

export function FoodCard({ item, extraType }: FoodCardProps) {
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem({
      name: item.name,
      basePrice: item.price,
      extraType: extraType || "none",
    })
  }

  return (
    <div className="bg-white border-2 border-orange-100 rounded-2xl p-6 flex flex-col gap-3 transition-all hover:border-orange-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-11 h-11 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center text-xl">
        {item.emoji}
      </div>
      <div className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold tracking-wide leading-tight flex-1 text-black">
        {item.name}
      </div>
      {item.description && (
        <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
      )}
      <div className="font-[family-name:var(--font-bebas)] text-2xl text-red-500 tracking-wide">
        Rs. {item.price}
      </div>
      <button
        onClick={handleAdd}
        className="bg-orange-500/10 border-2 border-orange-400 text-orange-600 rounded-xl py-2.5 font-bold text-xs tracking-widest uppercase hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-[0.97]"
      >
        + Add to Cart
      </button>
    </div>
  )
}

type SizedFoodCardProps = {
  item: SizedMenuItem
  sizeLabels?: { [key: string]: string }
  extraType: MenuCategory["extraType"]
}

export function SizedFoodCard({ item, sizeLabels, extraType }: SizedFoodCardProps) {
  const { addItem } = useCart()
  const sizes = Object.keys(item.prices)

  const handleAdd = (size: string, price: number) => {
    addItem({
      name: item.name,
      basePrice: price,
      size,
      extraType: extraType || "none",
    })
  }

  return (
    <div className="bg-white border-2 border-orange-100 rounded-2xl p-6 transition-all hover:border-orange-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
          {item.emoji}
        </div>
        <div>
          <div className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold tracking-wide text-black">
            {item.name}
          </div>
          {item.description && (
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>

      <div className={`grid gap-2 ${sizes.length === 1 ? "grid-cols-1" : sizes.length === 2 ? "grid-cols-2" : sizes.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleAdd(size, item.prices[size])}
            className="bg-orange-50 border-2 border-orange-200 rounded-xl py-3 px-2 text-center hover:bg-orange-500 hover:border-orange-500 transition-all hover:-translate-y-0.5 group/btn"
          >
            <span className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 group-hover/btn:text-white mb-1">
              {sizeLabels?.[size] || size}
            </span>
            <span className="block font-[family-name:var(--font-bebas)] text-lg text-black group-hover/btn:text-white tracking-wide">
              {size}
            </span>
            <span className="block text-xs font-bold text-red-500 group-hover/btn:text-white mt-0.5">
              Rs. {item.prices[size]}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

type DealCardProps = {
  item: MenuItem
}

export function DealCard({ item }: DealCardProps) {
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem({
      name: item.name,
      basePrice: item.price,
      extraType: "none",
    })
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-300 rounded-2xl p-6 flex flex-col gap-3 transition-all hover:border-orange-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-wider uppercase shadow-sm">
        Deal
      </div>
      <div className="w-11 h-11 bg-gradient-to-br from-orange-200 to-orange-100 rounded-xl flex items-center justify-center text-xl">
        {item.emoji}
      </div>
      <div className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold tracking-wide leading-tight text-black">
        {item.name}
      </div>
      {item.description && (
        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
      )}
      <div className="font-[family-name:var(--font-bebas)] text-3xl text-red-500 tracking-wide">
        Rs. {item.price}
      </div>
      <button
        onClick={handleAdd}
        className="bg-red-500/10 border-2 border-red-400 text-red-500 rounded-xl py-3 font-bold text-xs tracking-widest uppercase hover:bg-red-500 hover:text-white hover:border-red-500 transition-all active:scale-[0.97]"
      >
        + Add to Cart
      </button>
    </div>
  )
}
