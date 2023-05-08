import { addToBasket, handleFavorites } from '@/redux/slice/basket';
import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

export default function ProductCard({ product }) {
  const { image, id, price, name, description = '' } = product;

  const dispatch = useDispatch();
  const handleBasket = (image, title, price, id) => {
    //içine aldığı image title price ve id yi slice/basket de bulunan addToBasket e yollayarak orda gerekli kontrolleri
    //yaparak basket e ekliyoruz ve son olarak da sweetalert ile güzel bir alert göstererek fonksiyonu tamamlıyoruz.
    dispatch(addToBasket({ image, title, price, id }));
    swal({
      icon: 'success',
      text: 'Sepete Eklendi!',
      buttons: 'Teşekkürler!',
    });
  };
  return (
    <div className="bg-white w-full m-2 border border-gray-300 hover:shadow-md rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full px-4 py-4">
        <img className=" h-20 w-20 object-cover" src={image} alt={name} />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-900 font-bold">{price} TL</p>

          <div className="flex">
            <button
              className="flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => dispatch(handleFavorites(id))}
            >
              <FaHeart className="h-6 w-6" />
            </button>
            <button
              className="flex items-center justify-center ml-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 focus:outline-none"
              onClick={() => handleBasket(image, name, price, id)}
            >
              <FaShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
