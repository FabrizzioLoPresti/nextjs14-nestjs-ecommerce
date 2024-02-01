import { fetchCategories } from '@/libs/data';
import Link from 'next/link';
import SidebarLinks from './sidebar-links';

type Props = {};

const Sidebar = async (props: Props) => {
  const categories = await fetchCategories();
  return (
    <aside className="flex flex-row flex-wrap lg:flex-col gap-4 justify-between lg:justify-normal lg:sticky lg:top-20 lg:left-0 h-full">
      <SidebarLinks categories={categories} />
    </aside>
  );
};

export default Sidebar;
