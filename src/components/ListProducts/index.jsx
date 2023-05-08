import Product from '@/components/ListProducts/Product';
import { useSelector } from 'react-redux';

function ProductList() {
  const products = useSelector((state) => state.basket.products);
  return (
    <div className="m-2 grid grid-cols-4 gap-4">
      {products.map((product, index) => (
        <Product
          key={index * 35}
          id={product.id}
          image={product.image}
          price={product.price}
          title={product.name}
        />
      ))}
    </div>
  );
}

export default ProductList;
