import SectionHeader from "../common/SectionHeader";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <SectionHeader eyebrow="Browse" title="Shop by Category" />
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9">
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </div>
    </section>
  );
}
