export function Hero() {
  return (
    <section className="pt-[120px] pb-12 px-4 md:px-12 text-center relative bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl" />
      <div className="absolute top-40 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="inline-block bg-orange-500/15 border border-orange-500/30 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Attock&apos;s Finest Fast Food
        </div>
        
        <h1 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-wider mb-5 text-black">
          TURBO<span className="text-orange-500">BITES</span>
        </h1>
        
        <p className="text-gray-600 text-lg italic tracking-wide mb-10">
          Fresh Pizza · Burgers · Shawarma · Wraps — Delivered Hot
        </p>
        
        {/* Hours */}
        <div className="mt-8 inline-flex items-center gap-2 bg-white border-2 border-green-200 rounded-full px-5 py-2 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-600">
            Open <span className="text-black font-semibold">10 AM - 4 AM</span>
          </span>
        </div>
      </div>
    </section>
  )
}
