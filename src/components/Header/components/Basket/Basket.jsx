import Link from 'next/link';
import React from 'react';

import { SlBasket, SlBasketLoaded } from 'react-icons/sl';
import { useSelector } from 'react-redux';
const Basket = () => {
  const basket = useSelector((state) => state.basket.items);
  return (
    <Link href="/sepet" className=" hover:text-gray-300 px-3 py-2">
      <div className="relative">
        <div className="absolute -right-3 ">
          {/* Sepet 0 a eşit yani boş ise boş bırakıyoruz değilse uzunluğu yazdırıyoruz  */}
          {basket.length == 0 ? null : basket.length}
        </div>
        {basket.length == 0 ? (
          <SlBasket size={24} />
        ) : (
          <SlBasketLoaded size={24} />
        )}
      </div>
    </Link>
  );
};

export default Basket;
