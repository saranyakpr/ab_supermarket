const ITEMS = [
  { icon: "🚚", title: "Free Delivery", sub: "On orders above ₹499" },
  { icon: "🌱", title: "100% Fresh", sub: "Quality guaranteed" },
  { icon: "🔒", title: "Secure Checkout", sub: "Your data is safe" },
  { icon: "↩️", title: "Easy Returns", sub: "Hassle-free process" },
];

export default function PromoStrip() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:py-8">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xl">
              {item.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">{item.title}</p>
              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
