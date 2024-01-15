import Image from 'next/image';

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <section className="flex flex-col lg:flex-row gap-12">
      <Image
        src="/img/grid/voice_assistants.webp"
        width={600}
        height={400}
        alt="Product"
      />

      <div>
        <h1 className="font-bold text-4xl">Product Name</h1>
        <p className="text-gray-600">Product description</p>
        <p className="text-gray-600">Price: $100</p>
        <button className="button mt-4">Add to cart</button>
      </div>
    </section>
  );
};

export default ProductPage;
