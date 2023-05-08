import { handleBasketTotal, removeFromBasket } from '@/redux/slice/basket';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
const SepetCard = ({ id, image, name, price, total }) => {
  const dispatch = useDispatch();

  const handleBasket = (type) => {
    dispatch(handleBasketTotal({ id, type }));
  };

  return (
    <div className="w-[80%] relative h-auto p-8 border mt-4 flex-row justify-between">
      <div className="flex flex-col gap-5">
        <img src={image} className="w-32 h-32" />
        {name}
      </div>

      <button
        onClick={() => handleBasket('UP')}
        className="absolute top-0 right-4"
      >
        <AiOutlineArrowUp size={24} />
      </button>
      <div className="absolute top-[28px] right-6">{total}</div>
      <button
        onClick={() => handleBasket('DOWN')}
        className="absolute top-14 right-4"
      >
        <AiOutlineArrowDown size={24} />
      </button>

      <button
        onClick={() => dispatch(removeFromBasket(id))}
        className="absolute right-4 bg-red-600 text-white hover:opacity-80 p-2 rounded-xl bottom-20"
      >
        X
      </button>
      <div className="absolute right-4">{price * total} TL</div>
      <div></div>
    </div>
  );
};

export default SepetCard;
