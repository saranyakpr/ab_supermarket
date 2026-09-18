import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-4"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl"
        style={{ backgroundColor: `${category.color}1a` }}
      >
        {category.icon}
      </div>
      <span className="line-clamp-2 text-xs font-semibold text-slate-700 sm:text-sm">{category.name}</span>
    </Link>
  );
}
