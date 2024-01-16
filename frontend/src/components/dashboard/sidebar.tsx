'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="flex flex-col gap-4 h-full sticky top-20 left-0">
      <Link href="/dashboard">Home</Link>
      <Link href="/dashboard/settings">Settings</Link>
      <button className="button" onClick={() => signOut()}>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
