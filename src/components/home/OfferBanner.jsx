import { Link } from "react-router-dom";

const OFFERS = [
  {
    title: "Weekend Grocery Bonanza",
    subtitle: "Up to 40% off on staples & grains",
    cta: "Shop Groceries",
    to: "/category/groceries-staples",
    bg: "from-amber-500 to-orange-600",
    icon: "🛒",
  },
  {
    title: "Fresh Fruit Fiesta",
    subtitle: "Flat 20% off on seasonal fruits",
    cta: "Shop Fruits",
    to: "/category/fruits-vegetables",
    bg: "from-brand-600 to-emerald-500",
    icon: "🍎",
  },
  {
    title: "Snack Attack Sale",
    subtitle: "Buy 2 get extra 15% off",
    cta: "Shop Snacks",
    to: "/category/snacks-biscuits",
    bg: "from-rose-500 to-pink-600",
    icon: "🍪",
  },
];

export default function OfferBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {OFFERS.map((offer) => (
          <Link
            key={offer.title}
            to={offer.to}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${offer.bg} p-5 text-white shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
          >
            <span className="absolute -right-3 -top-3 text-6xl opacity-20 transition-transform duration-300 group-hover:scale-110">
              {offer.icon}
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-white/80">Limited time</p>
            <h3 className="mt-1 font-display text-lg font-bold">{offer.title}</h3>
            <p className="mt-1 text-sm text-white/85">{offer.subtitle}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
              {offer.cta}
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M7.5 4.5 13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
