"use client"

import { CartProvider } from "@/lib/cart-context"
import { MENU_CATEGORIES } from "@/lib/menu-data"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CategoryNav } from "@/components/category-nav"
import { MenuSection, Divider } from "@/components/menu-section"
import { CartPanel } from "@/components/cart-panel"
import { Footer } from "@/components/footer"
import { Toast } from "@/components/toast"

export default function Home() {
  return (
    <CartProvider>
      <div className="relative z-10 bg-white">
        <Navbar />
        <Hero />
        <CategoryNav />
        <Divider />
        
        {MENU_CATEGORIES.map((category, index) => (
          <div key={category.id}>
            <MenuSection category={category} />
            {index < MENU_CATEGORIES.length - 1 && <Divider />}
          </div>
        ))}
        
        <Divider />
        <Footer />
        <CartPanel />
        <Toast />
      </div>
    </CartProvider>
  )
}
