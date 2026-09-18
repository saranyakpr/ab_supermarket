const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly, such as your name, phone number, email and delivery address when you place an order.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used to process orders, provide customer support, and improve your shopping experience. We do not sell your personal data to third parties.",
  },
  {
    title: "3. Data Storage",
    body: "For this demo application, cart, wishlist and order data are stored locally in your browser and are not transmitted to any external server.",
  },
  {
    title: "4. Cookies & Local Storage",
    body: "We use browser local storage to remember your cart, favorites and order history between visits, purely to improve usability.",
  },
  {
    title: "5. Your Rights",
    body: "You may clear your locally stored data at any time by clearing your browser storage or contacting our support team for assistance.",
  },
  {
    title: "6. Security",
    body: "We take reasonable measures to protect your information, though no method of transmission or storage is 100% secure.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this privacy policy periodically. Continued use of the site indicates acceptance of the revised policy.",
  },
];

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Privacy Policy</h1>
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
