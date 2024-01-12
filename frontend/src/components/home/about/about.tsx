import Image from 'next/image';
import Link from 'next/link';
import { IconInfoHexagon } from '@tabler/icons-react';

type Props = {};

const About = (props: Props) => {
  return (
    <section className="min-h-screen">
      <div className="screens mt-24 xl:text-center flex flex-col xl:items-center xl:justify-center">
        <h2 className="font-bold text-4xl xl:text-6xl mb-6">
          What is a Smart Home?
        </h2>
        <p className="text-base xl:text-lg font-light lg:w-3/4 2xl:w-1/2 mb-4">
          A smart home is a house that uses internet-connected devices to enable
          the remote monitoring and management of appliances and systems, such
          as lighting and heating.
        </p>
        <Link
          href="/about"
          className="button flex flex-row items-center gap-x-2 md:w-fit"
        >
          <IconInfoHexagon size={24} />
          Learn More
        </Link>
      </div>

      <div className="screens py-12 h-full grid lg:grid-cols-2 lg:grid-rows-5 xl:grid-cols-4 xl:grid-rows-3 gap-4 [&>article]:rounded-2xl [&>article>div]:p-8 [&>article]:min-h-96 [&>article]:overflow-hidden">
        <article className="lg: xl:col-start-1 xl:col-end-2 relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Intelligent Lighting</h2>
            <p className="text-sm font-light">
              Tailor-made environments. Save energy, total control with a touch.
              Technology that lights up your life.
            </p>
          </div>
          <Image
            src={'/img/grid/intelligent_lighting.webp'}
            width={500}
            height={500}
            alt="Intelligent Lighting"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>
        <article className="lg: xl:col-start-2 xl:col-end-4 relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Home Entertainment</h2>
            <p className="text-sm font-light">
              Unparalleled home entertainment experience. Our smart devices
              offer immersive sound and voice control, bringing voice control,
              bringing innovation to your entertainment moments.
            </p>
          </div>
          <Image
            src={'/img/grid/home_entertainment.webp'}
            width={500}
            height={500}
            alt="Home Entertainment"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>
        <article className="lg: xl:col-start-4 xl:col-end-5 relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Connected Home</h2>
            <p className="text-sm font-light">
              Integrate and control. From lights to security, all in one. Your
              home smarter, simpler, more connected.
            </p>
          </div>
          <Image
            src={'/img/grid/connected_home.webp'}
            width={500}
            height={500}
            alt="Connected Home"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>

        <article className="lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 xl:col-start-1 xl:col-end-3 xl:row-start-auto xl:row-end-auto relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Voice Assistants</h2>
            <p className="text-sm font-light">
              Voice that transforms your home. With assistants like Alexa,
              control lights, music and more with simple commands. Simplify your
              life, all with your voice!
            </p>
          </div>
          <Image
            src={'/img/grid/voice_assistants.webp'}
            width={500}
            height={500}
            alt="Voice Assistants"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>
        <article className="lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4 xl:col-start-3 xl:col-end-5 xl:row-start-auto xl:row-end-auto relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Home Automation Systems</h2>
            <p className="text-sm font-light">
              Live in comfort. Curtains, temperature and more, tailored to you.
              Your home, anticipating every need.
            </p>
          </div>
          <Image
            src={'/img/grid/home_automation_systems.webp'}
            width={500}
            height={500}
            alt="Home Automation Systems"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>

        <article className="lg: xl:col-start-1 xl:col-end-2 relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Energy Control</h2>
            <p className="text-sm font-light">
              Intelligent savings. Connected devices, efficient programming.
              Your home, managing energy in a smart way.
            </p>
          </div>
          <Image
            src={'/img/grid/energy_control.webp'}
            width={500}
            height={500}
            alt="Energy Control"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>
        <article className="lg: xl:col-start-2 xl:col-end-4 relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Domestic Security</h2>
            <p className="text-sm font-light">
              Your home protected. Advanced cameras, instant alerts. Peace of
              mind at all times.
            </p>
          </div>
          <Image
            src={'/img/grid/domestic_security.webp'}
            width={500}
            height={500}
            alt="Domestic Security"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>
        <article className="lg: xl:col-start-4 xl:col-end-5 relative group">
          <div className="z-10 absolute inset-0">
            <h2 className="text-2xl">Compatibility and Expansion</h2>
            <p className="text-sm font-light">
              No limits. Integrated and compatible products, expand your smart
              home easily. Connectivity without borders.
            </p>
          </div>
          <Image
            src={'/img/grid/compatibility_and_expansion.webp'}
            width={500}
            height={500}
            alt="Compatibility and Expansion"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-40 z-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </article>
      </div>
    </section>
  );
};

export default About;
