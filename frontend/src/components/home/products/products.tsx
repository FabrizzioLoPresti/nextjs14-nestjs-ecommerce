import Slider from './slider';

type Props = {};

const Products = (props: Props) => {
  return (
    <main className="screens  my-24">
      <h2 className="xl:text-center font-bold text-4xl xl:text-6xl mb-6">
        Our Products
      </h2>

      <Slider />
    </main>
  );
};

export default Products;
