import Image from 'next/image';
import { IconMail } from '@tabler/icons-react';

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <section className="h-[500px] my-24 relative">
      <div className="screens relative z-10 w-full h-full flex flex-col justify-center">
        <div className="w-full lg:w-3/5 xl:lg:w-2/5 flex flex-col gap-y-8">
          <div>
            <h3 className="text-center lg:text-left text-2xl lg:text-4xl font-bold">
              Subscribe to our newsletter
            </h3>
            <p className="text-center lg:text-left text-xl lg:text-2xl font-bold">
              Get the latest news about smart homes
            </p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 text-lg text-zinc-400 placeholder-gray-500 border-2 border-gray-500 rounded-md outline-none focus:border-gray-900"
            />
            <button
              type="button"
              className="button flex flex-row gap-x-2 items-center w-fit"
            >
              <IconMail size={24} />
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
      <Image
        src="/img/smart_home_newsletter.webp"
        alt="newsletter"
        width={1920}
        height={1080}
        quality={100}
        className="z-0 absolute inset-0 brightness-40 w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default Newsletter;
