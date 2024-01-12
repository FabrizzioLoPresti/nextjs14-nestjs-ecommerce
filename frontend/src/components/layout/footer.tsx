import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-24 bg-zinc-800 pt-12">
      <div className="screens grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div>
          <h2 className="text-2xl font-bold">About</h2>
          <p>
            This is a website for a smart home company. It is a demo site for
            the purposes of learning Next.js.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Contact</h2>
          <a href="mailto:fabrizziolopresti1999@gmail.com">Mail</a>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Social</h2>
          <ul>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Smart Home. All rights reserved.
        </p>
        <p>
          Developed by{' '}
          <Link href="https://fabrox-dev.vercel.app/" target="_blank">
            Fabrizio Lo Presti
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
