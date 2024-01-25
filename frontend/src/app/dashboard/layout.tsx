import type { Metadata } from 'next';
import Sidebar from '@/components/dashboard/sidebar';

export const metadata: Metadata = {
  title: 'Dashboard | Smart Home',
  description:
    'The best smart home devices are an essential part of a 21st century home. They can be controlled by your voice, and help with chores around the house.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="screens mt-24 min-h-[100dvh] h-full flex flex-row gap-x-12">
      <Sidebar />
      {children}
    </section>
  );
}
