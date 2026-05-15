"use client"

import { useCart } from "@/lib/cart-context"
import { WHATSAPP_NUMBER } from "@/lib/menu-data"
import { useState } from "react"

export function CartPanel() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    toggleExtra,
    closeCart,
  } = useCart()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const handleCheckout = () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert("Please fill in your Name, Phone, and Address before ordering.")
      return
    }
    if (items.length === 0) {
      alert("Your basket is empty! Add items before ordering.")
      return
    }

    const lines = items
      .map((item) => {
        const selectedExtras = item.extras.filter((e) => e.selected)
        const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0)
        const lineTotal = (item.basePrice + extrasTotal) * item.quantity
        const extrasText = selectedExtras.length
          ? ` [${selectedExtras.map((e) => `+${e.name} Rs.${e.price}`).join(", ")}]`
          : ""
        const sizeText = item.size ? ` (${item.size})` : ""
        return `• ${item.name}${sizeText}${extrasText} x${item.quantity} = Rs. ${lineTotal}`
      })
      .join("\n")

    const msg = `*🔥 NEW ORDER — TURBO BITES 🔥*

*CUSTOMER DETAILS:*
👤 Name: ${name}
📞 Phone: ${phone}
📍 Address: ${address}

*ORDER:*
${lines}

*━━━━━━━━━━━━━━━━*
💰 *TOTAL: Rs. ${totalPrice}*`

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    )
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/75 z-[300] transition-opacity duration-300 backdrop-blur-sm ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-[#0d0d0d] border-l border-red-600/20 z-[400] flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center shrink-0">
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider text-red-500">
            Your Basket
          </h2>
          <button
            onClick={closeCart}
            className="bg-white/5 text-[#888] w-9 h-9 rounded-lg flex items-center justify-center text-xl hover:bg-red-500/15 hover:text-red-400 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-[#888]">
              <div className="text-5xl opacity-40">🛒</div>
              <div>Your basket is empty</div>
              <div className="text-xs text-[#555]">Add some delicious items above!</div>
            </div>
          ) : (
            items.map((item) => {
              const selectedExtras = item.extras.filter((e) => e.selected)
              const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0)
              const lineTotal = (item.basePrice + extrasTotal) * item.quantity

              return (
                <div
                  key={item.key}
                  className="bg-[#181818] border border-white/5 rounded-2xl p-4 animate-slide-in"
                >
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <div className="flex-1">
                      <div className="font-bold text-sm leading-tight">
                        {item.name}
                        {item.size && (
                          <span className="text-red-500 ml-1">({item.size})</span>
                        )}
                      </div>
                      {selectedExtras.length > 0 && (
                        <div className="text-xs text-orange-500 mt-1">
                          {selectedExtras.map((e) => `+Rs.${e.price} ${e.name}`).join(", ")}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-[#555] hover:bg-red-500/15 hover:text-red-400 p-1 rounded transition-all"
                      title="Remove"
                    >
                      🗑
                    </button>
                  </div>

                  <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.key, -1)}
                        className="text-red-500 text-lg font-bold hover:scale-125 transition-transform"
                      >
                        −
                      </button>
                      <span className="font-bold text-sm min-w-[16px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, 1)}
                        className="text-red-500 text-lg font-bold hover:scale-125 transition-transform"
                      >
                        +
                      </button>
                    </div>
                    <div className="font-[family-name:var(--font-bebas)] text-xl text-red-500 tracking-wide">
                      Rs. {lineTotal}
                    </div>
                  </div>

                  {/* Extras */}
                  {item.extras.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                      {item.extras.map((extra) => (
                        <button
                          key={extra.name}
                          onClick={() => toggleExtra(item.key, extra.name)}
                          className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
                            extra.selected
                              ? "bg-red-500/15 border-red-500/40 text-red-500"
                              : "bg-white/5 border-white/10 text-[#888] hover:border-red-500/30 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[9px] ${
                              extra.selected ? "border-red-500 bg-red-500/20" : "border-current"
                            }`}
                          >
                            {extra.selected && "✓"}
                          </span>
                          {extra.name} (+Rs. {extra.price})
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 shrink-0">
          <div className="flex justify-between items-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-4">
            <span className="font-bold text-sm text-[#888] uppercase tracking-wide">
              Total Bill
            </span>
            <span className="font-[family-name:var(--font-bebas)] text-3xl text-red-500 tracking-wide">
              Rs. {totalPrice}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#555] focus:border-red-500/50 outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#555] focus:border-red-500/50 outline-none transition-colors"
            />
            <textarea
              placeholder="Delivery Address *"
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#555] focus:border-red-500/50 outline-none resize-none transition-colors"
            />
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-red-600 hover:bg-red-500 text-white rounded-xl py-4 mt-4 font-[family-name:var(--font-bebas)] text-xl tracking-widest flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.66 0-3.203-.507-4.485-1.374l-.322-.193-2.866.852.852-2.866-.193-.322A7.963 7.963 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            ORDER ON WHATSAPP
          </button>
        </div>
      </div>
    </>
  )
}
