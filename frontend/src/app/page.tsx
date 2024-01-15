import Hero from '@/components/home/hero/hero';
import About from '@/components/home/about/about';
import Products from '@/components/home/products/products';
import Newsletter from '@/components/home/newsletter/newsletter';
import Contact from '@/components/home/contact/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Newsletter />
      <Contact />
    </>
  );
}
