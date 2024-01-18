import Link from 'next/link';

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <section className="screens min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page not found</p>
      <Link href="/" className="button">
        Go back home
      </Link>
    </section>
  );
}
