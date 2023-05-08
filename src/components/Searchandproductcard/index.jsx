import { addToBasket, handleFavorites } from '@/redux/slice/basket';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

const Spcard = ({ item }) => {
  const router = useRouter();
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
    <div className="flex flex-col transition relative ease-in-out delay-150 hover:-translate-y-2 justify-center group items-center border h-auto w-full md:w-[33.3%] p-8  rounded-xl">
      <div className="flex justify-center items-center">
        <img
          src={item.image}
          className="cursor-pointer"
          onClick={() => router.push(`/detail/${item.id}`)}
        />
      </div>
      <div>{item.name}</div>
      <div>{item.price} TL</div>
      <button
        onClick={() => handleBasket(item.image, item.name, item.price, item.id)}
        className="mt-2 w-full bg-orange-500 rounded-xl px-4 text-white py-4"
      >
        Sepete Ekle!
      </button>
      <div className="absolute right-4 top-4 cursor-pointer">
        {item.favorited ? (
          <AiFillHeart
            onClick={() => dispatch(handleFavorites(item.id))}
            size={20}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => dispatch(handleFavorites(item.id))}
            size={20}
          />
        )}
      </div>
    </div>
  );
};

export default Spcard;
