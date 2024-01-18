import { ProductType } from '@/types/types';
import { fetchProducts } from '@/libs/data';
import Slider from './slider';

type Props = {};

const SliderServer = async (props: Props) => {
  const products: ProductType[] = await fetchProducts(1, 10);

  return <Slider products={products} />;
};

export default SliderServer;
