"use client"

const CATEGORIES = [
  { id: "pizza", label: "Pizza", icon: "🍕", targetIds: ["traditional-flavours-pizza", "signature-flavours-pizza", "turbo-bite-special-pizza", "square-treat-pizza", "crown-crust-pizza", "stuff-crust"] },
  { id: "burgers", label: "Burgers", icon: "🍔", targetIds: ["saucy-burger"] },
  { id: "wraps", label: "Wraps", icon: "🌯", targetIds: ["wraps"] },
  { id: "fries", label: "Fries", icon: "🍟", targetIds: ["loaded-fries"] },
  { id: "wings", label: "Wings", icon: "🍗", targetIds: ["wings-nuggets", "appetizer-oven-baked-wings"] },
  { id: "paratha", label: "Paratha", icon: "🫓", targetIds: ["paratha-shawarma"] },
  { id: "pasta", label: "Pasta", icon: "🍝", targetIds: ["oven-baked-pasta"] },
]

export function CategoryNav() {
  const scrollToSection = (targetIds: string[]) => {
    const firstSection = document.getElementById(targetIds[0])
    if (firstSection) {
      const yOffset = -80
      const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="py-8 px-4 md:px-12 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-2xl md:text-3xl tracking-wider text-center mb-6 text-black">
          Browse <span className="text-orange-500">Categories</span>
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.targetIds)}
              className="group flex flex-col items-center gap-2 p-4 md:p-5 bg-white border-2 border-orange-200 rounded-2xl shadow-sm hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 active:scale-95"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-float">
                {cat.icon}
              </div>
              <span className="font-[family-name:var(--font-barlow-condensed)] text-sm md:text-base font-bold text-black group-hover:text-orange-600 transition-colors tracking-wide">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
