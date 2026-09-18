import { useState } from "react";
import { useToast } from "../context/ToastContext";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

export default function Contact() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Thanks! We'll get back to you within 24 hours.", { type: "success" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <div className="mb-8 text-center">
        <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Contact & Help</h1>
        <p className="mt-2 text-sm text-slate-500">We're here to help with orders, deliveries and anything else.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: "📞", title: "Call Us", value: "1800-123-4567", sub: "Mon–Sun, 7am–11pm" },
            { icon: "✉️", title: "Email Us", value: "support@absupermarket.example", sub: "We reply within 24 hours" },
            { icon: "📍", title: "Visit Us", value: "12 MG Road, Bengaluru, KA 560001", sub: "Head office & flagship store" },
            { icon: "💬", title: "Live Chat", value: "Available in-app", sub: "Instant support during business hours" },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-card">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-lg">{c.icon}</span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{c.title}</p>
                <p className="text-sm text-slate-600">{c.value}</p>
                <p className="text-xs text-slate-400">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card sm:p-6">
          <h2 className="font-display text-base font-bold text-slate-900">Send us a message</h2>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600" htmlFor="name">Name</label>
            <input id="name" required className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600" htmlFor="email">Email</label>
            <input id="email" type="email" required className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600" htmlFor="message">Message</label>
            <textarea id="message" required rows={4} className={inputClass} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
          </div>
          <button type="submit" className="w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 active:scale-95">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
