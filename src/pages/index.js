import Header from '@/components/Header';
import SliderComponent from '@/components/SliderComponent';
import Product from '@/components/ListProducts/Product';
import { useSelector } from 'react-redux';
import Footer from '@/components/Footer';
const Home = () => {
  const products = useSelector((state) => state.basket.products);
  const clone = [...products];
  return (
    <>
      <Header />
      <div className="block w-full bg-[url('https://www.do-re.com.tr/Library/Template/Content/images/home_theme_bg_generic.png')]">
        <div className="max-w-screen-sm mx-auto p-12 ">
          <SliderComponent />
        </div>
      </div>
      <div className="w-full p-12 items-center justify-center flex md:flex-row flex-col gap-20 relative">
        <div className="w-[15%] hidden md:block rounded h-[495px] bg-center bg-[url('https://www.do-re.com.tr/Library/Template/Content/images/icons/icon_home-hotdeal-products.png')]" />
        <div className="w-[60%] md:h-[66.5vh] flex flex-col md:flex-row gap-4 justify-center">
          {clone.splice(0, 3).map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.name}
                price={item.price}
                favorited={item.favorited}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
