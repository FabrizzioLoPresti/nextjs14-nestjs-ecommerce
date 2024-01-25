import { Suspense } from 'react';
import Link from 'next/link';
import { IconHexagon } from '@tabler/icons-react';
import Animation from './animation';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="min-h-screen h-full background-hero">
      <div className="screens h-screen flex flex-col xl:grid xl:grid-cols-2 items-center justify-center relative z-10">
        <div className="flex flex-col gap-y-4">
          <div>
            <h1 className="font-bold text-4xl xl:text-6xl">
              Design and build your own smart home with{' '}
              <span className="text-primary-500">Smart House</span>
            </h1>
            <p className="text-base xl:text-lg font-light">
              Smart House is a home automation platform that allows you to
              control smart devices in your home.
            </p>
          </div>
          <Link
            href="/products"
            className="button flex flex-row items-center gap-x-2 w-fit"
          >
            <IconHexagon size={24} />
            Explore the Future.
          </Link>
        </div>

        <div className="hidden xl:block">
          <Suspense fallback={<div>Loading...</div>}>
            {/* <Animation /> */}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
