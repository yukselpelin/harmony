import dynamic from 'next/dynamic';

dynamic;
const Basket = dynamic(() => import('./Basket'), {
  ssr: false,
});

export default Basket;
