import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const linkClass = ({ isActive }) =>
  `flex flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-medium transition ${
    isActive ? "text-brand-700" : "text-slate-500"
  }`;

export default function MobileBottomNav() {
  const { totals } = useCart();
  const { count } = useWishlist();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden">
      <NavLink to="/" end className={linkClass}>
        <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5 12 4l9 7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
        </svg>
        Home
      </NavLink>
      <NavLink to="/category/fruits-vegetables" className={linkClass}>
        <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
        Categories
      </NavLink>
      <NavLink to="/favorites" className={linkClass}>
        <span className="relative">
          <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s-7.5-4.6-10-9.1C0.3 8.2 2 4.5 5.6 4c2.1-.3 4 .8 6.4 3.2C14.4 4.8 16.3 3.7 18.4 4c3.6.5 5.3 4.2 3.6 7.9C19.5 16.4 12 21 12 21z"
            />
          </svg>
          {count > 0 && (
            <span className="absolute -right-1.5 -top-1 flex h-3.5 min-w-[0.875rem] items-center justify-center rounded-full bg-accent-500 px-0.5 text-[9px] font-bold text-white">
              {count}
            </span>
          )}
        </span>
        Favorites
      </NavLink>
      <NavLink to="/cart" className={linkClass}>
        <span className="relative">
          <svg viewBox="0 0 20 20" className="h-5.5 w-5.5" fill="currentColor">
            <path d="M2 2h1.4l.5 2H17a1 1 0 0 1 .97 1.24l-1.5 6A1 1 0 0 1 15.5 12H6.7l.2 1H15a1 1 0 1 1 0 2H6a1 1 0 0 1-.97-.76L3.06 4H2a1 1 0 1 1 0-2Zm4.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          {totals.totalQty > 0 && (
            <span className="absolute -right-1.5 -top-1 flex h-3.5 min-w-[0.875rem] items-center justify-center rounded-full bg-accent-500 px-0.5 text-[9px] font-bold text-white">
              {totals.totalQty}
            </span>
          )}
        </span>
        Cart
      </NavLink>
      <NavLink to="/orders" className={linkClass}>
        <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
        </svg>
        Orders
      </NavLink>
    </nav>
  );
}
