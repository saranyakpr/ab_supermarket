const FAQS = [
  { q: "What are the delivery charges?", a: "Delivery is free on all orders above ₹499. A flat charge of ₹40 applies to orders below that." },
  { q: "How long does delivery take?", a: "Most orders are delivered within 60–90 minutes in serviceable areas, and within 24 hours in others." },
  { q: "Which areas do you deliver to?", a: "We currently deliver across Bengaluru city limits, with more cities coming soon." },
  { q: "Can I schedule a delivery slot?", a: "Slot scheduling will be available soon — for now, orders are delivered as soon as possible." },
  { q: "What if an item is out of stock?", a: "We'll notify you and adjust your order total accordingly before it ships." },
];

export default function DeliveryInfo() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Delivery Information</h1>
      <p className="mt-2 text-sm text-slate-500">Everything you need to know about how we get groceries to your door.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹499" },
          { icon: "⏱️", title: "60–90 Min", desc: "Typical delivery time" },
          { icon: "📦", title: "Careful Packing", desc: "Fresh & secure packaging" },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-card">
            <span className="text-2xl">{f.icon}</span>
            <p className="mt-2 text-sm font-semibold text-slate-800">{f.title}</p>
            <p className="text-xs text-slate-500">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-3">
        <h2 className="font-display text-lg font-bold text-slate-900">Frequently Asked Questions</h2>
        {FAQS.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-card open:shadow-card-hover">
            <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800 marker:content-none">
              <span className="flex items-center justify-between">
                {f.q}
                <span className="text-brand-600 transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-500">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
