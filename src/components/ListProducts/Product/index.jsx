import { addToBasket, handleFavorites } from '@/redux/slice/basket';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
const Product = ({ image, title, price, id, favorited }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
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
    <div
      key={id}
      className="relative group w-full overflow-hidden rounded-lg shadow-lg bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-64 object-contain" />
      {isHovered && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <button
            className="group-hover:block hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 transition duration-300 ease-in-out"
            onClick={() => handleBasket(image, title, price, id)}
          >
            <FaCartPlus size={20} />
          </button>
          <button
            className="group-hover:block hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            onClick={() => dispatch(handleFavorites(id))}
          >
            {favorited ? (
              <AiFillHeart size={20} />
            ) : (
              <AiOutlineHeart size={20} />
            )}
          </button>
          <button
            onClick={() => router.push(`/detail/${id}`)}
            className="group-hover:block hidden ml-2 bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            <AiOutlineArrowRight size={20} />
          </button>
        </div>
      )}
      <div className="p-4 relative">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <p className="mt-2 absolute text-3xl font-medium text-gray-600 top-40">
          {price} TL
        </p>
      </div>
    </div>
  );
};

export default Product;
