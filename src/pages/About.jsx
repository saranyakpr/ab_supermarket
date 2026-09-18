const VALUES = [
  { icon: "🌱", title: "Freshness First", desc: "We source directly from farms and trusted suppliers every single day." },
  { icon: "🤝", title: "Fair Pricing", desc: "Quality groceries at honest prices, with regular deals and discounts." },
  { icon: "⚡", title: "Fast Delivery", desc: "From our store to your doorstep, quickly and reliably." },
  { icon: "💚", title: "Community First", desc: "Supporting local farmers and neighbourhood communities." },
];

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 px-4 py-14 text-center text-white sm:py-20">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">About AB Supermarket</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-brand-50/90 sm:text-base">
          Your trusted neighbourhood supermarket, now online — bringing fresh groceries and daily essentials
          right to your doorstep.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
        <h2 className="font-display text-xl font-bold text-slate-900">Our Story</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          AB Supermarket started with a simple idea: everyone deserves access to fresh, quality groceries
          without the hassle. What began as a single neighbourhood store has grown into a full-fledged online
          supermarket, serving thousands of households with fruits & vegetables, dairy, bakery, pantry staples,
          personal care and household essentials — all in one convenient place.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          We work directly with local farmers and trusted brands to bring you the best quality at fair prices,
          while making sure your shopping experience is smooth, fast and enjoyable.
        </p>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-xl font-bold text-slate-900">What We Stand For</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-100 p-5 text-center shadow-card">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-3 font-display text-sm font-bold text-slate-900">{v.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
