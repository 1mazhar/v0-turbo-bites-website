export function Hero() {
  return (
    <section className="pt-[120px] pb-16 px-4 md:px-12 text-center relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(220,38,38,0.12)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="inline-block bg-red-500/15 border border-red-500/30 text-red-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
        Attock&apos;s Finest Fast Food
      </div>
      
      <h1 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-wider mb-5">
        TURBO<span className="text-red-500">BITES</span>
      </h1>
      
      <p className="text-[#888] text-lg italic tracking-wide mb-10">
        Fresh Pizza · Burgers · Shawarma · Wraps — Delivered Hot
      </p>
      
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="bg-[#181818] border border-white/10 rounded-full px-5 py-2 text-sm font-semibold text-[#888] tracking-wide">
          <span className="text-red-500 mr-2">🍕</span> Premium Pizzas
        </div>
        <div className="bg-[#181818] border border-white/10 rounded-full px-5 py-2 text-sm font-semibold text-[#888] tracking-wide">
          <span className="text-red-500 mr-2">🍔</span> Saucy Burgers
        </div>
        <div className="bg-[#181818] border border-white/10 rounded-full px-5 py-2 text-sm font-semibold text-[#888] tracking-wide">
          <span className="text-red-500 mr-2">📱</span> Order via WhatsApp
        </div>
      </div>

      {/* Hours */}
      <div className="mt-8 inline-flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-5 py-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm text-[#888]">
          Open <span className="text-white font-semibold">10 AM - 4 AM</span>
        </span>
      </div>
    </section>
  )
}
