import { useState } from "react";
import { useToast } from "../../context/ToastContext";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Subscribed! Watch your inbox for deals.", { type: "success" });
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-center sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Never miss a deal</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-300">
            Subscribe to get weekly offers, fresh arrivals and exclusive discounts from AB Supermarket.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-brand-400 focus:ring-2"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
