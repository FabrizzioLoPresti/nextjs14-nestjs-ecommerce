import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Smart Home',
  description:
    'The best smart home devices are an essential part of a 21st century home. They can be controlled by your voice, and help with chores around the house.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="screens mt-24">{children}</section>;
}
