import { NavLink } from "react-router-dom";
import { categories } from "../../data/categories";

export default function Navbar() {
  return (
    <nav className="hidden border-b border-slate-100 bg-brand-50/50 sm:block">
      <div className="no-scrollbar mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2">
        <NavLink
          to="/offers"
          className={({ isActive }) =>
            `shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              isActive ? "bg-accent-500 text-white" : "text-accent-700 hover:bg-accent-100"
            }`
          }
        >
          🔥 Offers
        </NavLink>
        {categories.map((cat) => (
          <NavLink
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className={({ isActive }) =>
              `shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                isActive ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-brand-100"
              }`
            }
          >
            {cat.icon} {cat.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
