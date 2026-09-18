const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the AB Supermarket website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Orders & Availability",
    body: "All products are subject to availability. We reserve the right to limit quantities and to refuse or cancel any order at our discretion.",
  },
  {
    title: "3. Pricing",
    body: "Prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise. Prices are subject to change without prior notice.",
  },
  {
    title: "4. Payments",
    body: "Currently, orders are fulfilled via Cash on Delivery (COD). Online payment integration will be introduced in a future update.",
  },
  {
    title: "5. Delivery",
    body: "We aim to deliver orders within the estimated time window, though delays may occur due to unforeseen circumstances beyond our control.",
  },
  {
    title: "6. Returns & Refunds",
    body: "Damaged, expired or incorrect items may be returned at the time of delivery or reported within 24 hours for a replacement or refund.",
  },
  {
    title: "7. User Conduct",
    body: "You agree not to misuse the platform, including submitting false information or attempting to disrupt our services.",
  },
  {
    title: "8. Changes to Terms",
    body: "We may revise these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.",
  },
];

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: September 2026</p>

      <div className="mt-8 space-y-6">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-base font-bold text-slate-900">{s.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
