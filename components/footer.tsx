export function Footer() {
  return (
    <footer className="border-t border-white/5">
      {/* About Section */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl tracking-wider mb-6">
            Why <span className="text-red-500">Turbo Bites</span>?
          </h3>
          <p className="text-[#888] text-lg leading-relaxed mb-8">
            Our kitchen is built on one simple promise: fast service, fresh ingredients, and flavors that keep you coming back for more. From our signature pizzas to our juicy burgers and crispy fried delights, every bite is crafted with passion and precision. We take pride in serving Attock&apos;s finest fast food, made fresh daily with premium ingredients. Whether you&apos;re craving a late-night snack or feeding the whole family, Turbo Bites has got you covered!
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-[#888]">
              <span className="text-red-500 text-lg">🚀</span>
              Fast Delivery
            </div>
            <div className="flex items-center gap-2 text-[#888]">
              <span className="text-red-500 text-lg">🥗</span>
              Fresh Ingredients
            </div>
            <div className="flex items-center gap-2 text-[#888]">
              <span className="text-red-500 text-lg">⭐</span>
              Premium Quality
            </div>
            <div className="flex items-center gap-2 text-[#888]">
              <span className="text-red-500 text-lg">🕐</span>
              Open Till 4 AM
            </div>
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12 text-center">
          <div className="text-[#888] text-sm mb-4">
            <span className="text-white font-semibold">📍 Location:</span> Near Aslam Marwat Hospital, Kamra Road, Attock
          </div>
          <div className="text-[#888] text-sm mb-4">
            <span className="text-white font-semibold">📱 WhatsApp:</span>{" "}
            <a href="https://wa.me/923101777790" className="text-red-500 hover:underline">
              0310-1777790
            </a>
          </div>
          <div className="text-[#888] text-sm">
            <span className="text-white font-semibold">🕐 Hours:</span> 10:00 AM - 4:00 AM (Daily)
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12 text-center">
          <p className="text-[#888] text-sm mb-2">
            <span className="text-red-500 font-semibold">TURBO BITES</span> — Attock&apos;s Finest Fast Food
          </p>
          <p className="text-[#555] text-xs">
            Orders placed via WhatsApp · Delivery in Attock
          </p>
          <p className="text-[#444] text-[10px] mt-6">
            Made by Mazhar Zaman
          </p>
        </div>
      </div>
    </footer>
  )
}
