'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { CategoryType, FilterType } from '@/types/types';

type Props = {
  categories: CategoryType[];
};

const SidebarLinks = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSort = ({
    sort = searchParams.get('sort') ?? '',
    category = searchParams.get('category') ?? '',
  }: FilterType) => {
    const params = new URLSearchParams(searchParams);

    if (sort) {
      params.set('sort', sort);
    } else {
      params.delete('sort');
    }

    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl">Order By</h2>
        <ul className="flex flex-col [&>li]:cursor-pointer">
          <li
            onClick={() => {
              handleSort({ sort: '' });
            }}
          >
            Default
          </li>
          <li
            onClick={() => {
              handleSort({ sort: 'PriceLowToHigh' });
            }}
          >
            Price (Low to High)
          </li>
          <li
            onClick={() => {
              handleSort({ sort: 'PriceHighToLow' });
            }}
          >
            Price (High to Low)
          </li>
          <li
            onClick={() => {
              handleSort({ sort: 'Newest' });
            }}
          >
            Newest
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-2xl">Categories</h2>
        <ul className="flex flex-col [&>li]:cursor-pointer">
          <li
            onClick={() => {
              handleSort({ category: '' });
            }}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                handleSort({ category: category.name });
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarLinks;
