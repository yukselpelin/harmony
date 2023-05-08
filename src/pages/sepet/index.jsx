import Header from '@/components/Header';
import React from 'react';
import SepetCard from '../../components/SepetCard';
import { useSelector } from 'react-redux';
import Footer from '@/components/Footer';
const Sepet = () => {
  const basket = useSelector((state) => state.basket.items);
  return (
    <>
      <Header />
      <div className="w-full h-full mb-4">
        {basket.length > 0 && (
          <h1 className="text-center text-3xl mt-2 font-extrabold space tracking-wider uppercase">
            Sepetiniz
          </h1>
        )}
        <div className="flex flex-wrap justify-center items-center">
          {basket.length > 0 ? (
            basket.map((item) => {
              return (
                <SepetCard
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  total={item.total}
                  name={item.title}
                  image={item.image}
                />
              );
            })
          ) : (
            <div className="block w-[100vh] h-[100vh] left-[45%] top-[20%] mb-auto">
              <h1 className="text-center mt-80">Sepetiniz şuan boş!</h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sepet;
