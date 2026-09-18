import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function IconButton({ to, label, count, children }) {
  return (
    <Link
      to={to}
      aria-label={label}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
    >
      {children}
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-accent-500 px-1 text-[10px] font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}

export default function Header() {
  const { totals } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 font-display text-base font-extrabold text-white shadow-sm">
            AB
          </span>
          <span className="hidden font-display text-lg font-bold text-slate-900 sm:block">
            AB Supermarket
          </span>
        </Link>

        <div className="hidden flex-1 sm:block">
          <SearchBar />
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => setMobileSearchOpen((v) => !v)}
            aria-label="Toggle search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-brand-50 hover:text-brand-700 sm:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="9" r="6.5" />
              <path d="m17.5 17.5-4-4" strokeLinecap="round" />
            </svg>
          </button>

          <IconButton to="/favorites" label="Favorites" count={wishlistCount}>
            <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s-7.5-4.6-10-9.1C0.3 8.2 2 4.5 5.6 4c2.1-.3 4 .8 6.4 3.2C14.4 4.8 16.3 3.7 18.4 4c3.6.5 5.3 4.2 3.6 7.9C19.5 16.4 12 21 12 21z"
              />
            </svg>
          </IconButton>

          <IconButton to="/cart" label="Cart" count={totals.totalQty}>
            <svg viewBox="0 0 20 20" className="h-5.5 w-5.5" fill="currentColor">
              <path d="M2 2h1.4l.5 2H17a1 1 0 0 1 .97 1.24l-1.5 6A1 1 0 0 1 15.5 12H6.7l.2 1H15a1 1 0 1 1 0 2H6a1 1 0 0 1-.97-.76L3.06 4H2a1 1 0 1 1 0-2Zm4.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </IconButton>

          <IconButton to="/orders" label="My Orders">
            <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path strokeLinecap="round" d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </IconButton>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="border-t border-slate-100 px-4 py-3 sm:hidden">
          <SearchBar autoFocus onSubmit={() => setMobileSearchOpen(false)} />
        </div>
      )}
    </header>
  );
}
