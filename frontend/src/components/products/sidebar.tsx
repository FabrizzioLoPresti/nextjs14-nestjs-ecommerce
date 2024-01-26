import { fetchCategories } from '@/libs/data';
import Link from 'next/link';

type Props = {};

const Sidebar = async (props: Props) => {
  const categories = await fetchCategories();
  return (
    <aside className="flex flex-row flex-wrap lg:flex-col gap-4 justify-between lg:justify-normal lg:sticky lg:top-20 lg:left-0 h-full">
      <div>
        <h2 className="font-bold text-2xl">Order By</h2>
        <ul className="flex flex-col">
          <Link href="/products?sort=price">Price (Low to High)</Link>
          <Link href="/products?sort=-price">Price (High to Low)</Link>
          <Link href="/products?sort=-created_at">Newest</Link>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-2xl">Categories</h2>
        <ul className="flex flex-col">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.name}`}
            >
              {category.name}
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
