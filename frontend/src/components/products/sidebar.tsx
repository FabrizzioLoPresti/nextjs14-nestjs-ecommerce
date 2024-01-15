import Link from 'next/link';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="flex flex-row lg:flex-col gap-4 justify-between lg:justify-normal">
      <div>
        <h2 className="font-bold text-2xl">Categories</h2>
        <ul className="flex flex-col">
          <Link href="/products?category=lighting">Lighting</Link>
          <Link href="/products?category=security">Security</Link>
          <Link href="/products?category=climate">Climate</Link>
          <Link href="/products?category=entertainment">Entertainment</Link>
          <Link href="/products?category=appliances">Appliances</Link>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-2xl">Price</h2>
        <ul className="flex flex-col">
          <Link href="/products?price=0-100">Under $100</Link>
          <Link href="/products?price=100-200">$100 - $300</Link>
          <Link href="/products?price=300-500">$300 - $500</Link>
          <Link href="/products?price=500-1000">$500 - $1000</Link>
          <Link href="/products?price=2000-10000">Above $1000</Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
