import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

const COLUMN_LINK = "text-sm text-slate-400 transition hover:text-white";

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 pb-20 pt-12 text-slate-300 sm:pb-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 font-display text-base font-extrabold text-white">
              AB
            </span>
            <span className="font-display text-lg font-bold text-white">AB Supermarket</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Your neighbourhood supermarket, online. Fresh produce, daily essentials and household needs —
            delivered fast, priced fair.
          </p>
          <div className="mt-4 space-y-1.5 text-sm text-slate-400">
            <p className="flex items-center gap-2">📍 12 MG Road, Bengaluru, KA 560001</p>
            <p className="flex items-center gap-2">📞 1800-123-4567</p>
            <p className="flex items-center gap-2">✉️ support@absupermarket.example</p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/about" className={COLUMN_LINK}>About Us</Link></li>
            <li><Link to="/contact" className={COLUMN_LINK}>Contact Us</Link></li>
            <li><Link to="/delivery-info" className={COLUMN_LINK}>Delivery Information</Link></li>
            <li><Link to="/offers" className={COLUMN_LINK}>Offers & Deals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Categories</h4>
          <ul className="mt-3 space-y-2">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className={COLUMN_LINK}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Legal</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/terms" className={COLUMN_LINK}>Terms & Conditions</Link></li>
            <li><Link to="/privacy" className={COLUMN_LINK}>Privacy Policy</Link></li>
            <li><Link to="/orders" className={COLUMN_LINK}>My Orders</Link></li>
            <li><Link to="/favorites" className={COLUMN_LINK}>Wishlist</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} AB Supermarket. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <span>We accept:</span>
          <span className="rounded bg-white/10 px-2 py-1">UPI</span>
          <span className="rounded bg-white/10 px-2 py-1">Cards</span>
          <span className="rounded bg-white/10 px-2 py-1">Cash on Delivery</span>
        </div>
      </div>
    </footer>
  );
}
