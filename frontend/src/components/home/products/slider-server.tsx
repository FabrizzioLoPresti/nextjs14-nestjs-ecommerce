import { fetchProducts } from '@/libs/data';
import Slider from './slider';

type Props = {};

const SliderServer = async (props: Props) => {
  const products = await fetchProducts(1, 10, {
    category: undefined,
    sort: undefined,
  });

  return <Slider products={products} />;
};

export default SliderServer;
