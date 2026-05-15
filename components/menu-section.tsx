import type { MenuItem, SizedMenuItem, MenuCategory } from "@/lib/menu-data"
import { FoodCard, SizedFoodCard, DealCard } from "./food-cards"

type MenuSectionProps = {
  category: MenuCategory
}

export function MenuSection({ category }: MenuSectionProps) {
  const itemCount = category.items.length

  return (
    <section className="max-w-[1200px] mx-auto py-16 px-4 md:px-12" id={category.id}>
      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-10">
        <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl tracking-wider">
          {category.name.split(" ").map((word, i) => (
            <span key={i}>
              {i === category.name.split(" ").length - 1 ? (
                <span className="text-red-500">{word}</span>
              ) : (
                word + " "
              )}
            </span>
          ))}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-red-500/20 to-transparent" />
        <span className="text-[#888] text-xs font-bold tracking-widest uppercase">
          {itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}
        </span>
      </div>

      {/* Items Grid */}
      {category.type === "deal" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(category.items as MenuItem[]).map((item) => (
            <DealCard key={item.id} item={item} />
          ))}
        </div>
      ) : category.type === "sized" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(category.items as SizedMenuItem[]).map((item) => (
            <SizedFoodCard
              key={item.id}
              item={item}
              sizeLabels={category.sizeLabels}
              extraType={category.extraType}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {(category.items as MenuItem[]).map((item) => (
            <FoodCard key={item.id} item={item} extraType={category.extraType} />
          ))}
        </div>
      )}
    </section>
  )
}

export function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent mx-4 md:mx-12" />
  )
}
