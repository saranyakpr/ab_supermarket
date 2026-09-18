import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500">
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-xl animate-slide-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            🚚 Free delivery on orders above ₹499
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Fresh groceries,
            <br className="hidden sm:block" /> delivered to your door.
          </h1>
          <p className="mt-4 max-w-md text-sm text-brand-50/90 sm:text-base">
            Farm-fresh produce, daily essentials and household needs — all in one place, at prices that make sense.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/category/fruits-vegetables"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-brand-900/20 transition hover:bg-brand-50 active:scale-95"
            >
              Shop Now
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M7.5 4.5 13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
              </svg>
            </Link>
            <Link
              to="/offers"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-900/20 transition hover:bg-accent-600 active:scale-95"
            >
              🔥 View Offers
            </Link>
          </div>
        </div>

        <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4 lg:w-auto">
          {[
            { icon: "🥬", label: "Fresh Produce", sub: "Sourced daily" },
            { icon: "⚡", label: "Express Delivery", sub: "In 60 minutes" },
            { icon: "💰", label: "Best Prices", sub: "Daily deals" },
            { icon: "↩️", label: "Easy Returns", sub: "No questions asked" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col gap-1 rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm ring-1 ring-white/10"
            >
              <span className="text-2xl">{f.icon}</span>
              <span className="text-sm font-semibold">{f.label}</span>
              <span className="text-xs text-white/70">{f.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
