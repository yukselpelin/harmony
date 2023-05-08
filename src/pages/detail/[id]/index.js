import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { handleDetail, handleFavorites } from '@/redux/slice/basket';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const products = useSelector((state) => state.basket.products);
  //ürünleri alıp filtreliyoruz tek 1 ürün geleceği için de 0. elemanı alıp tekrar maplemek ile uğraşmıyoruz.
  const detail = products.filter((item) => item.id == id);
  const handleBasket = ({ image, title, price, id, totalnumber }) => {
    //içine aldığı image title price ve id yi slice/basket de bulunan handleDetail e yollayarak orda gerekli kontrolleri
    //yaparak basket e ekliyoruz ve son olarak da sweetalert ile güzel bir alert göstererek fonksiyonu tamamlıyoruz.
    dispatch(handleDetail({ image, title, price, id, total: totalnumber }));
    swal({
      icon: 'success',
      text: 'Sepete Eklendi!',
      buttons: 'Teşekkürler!',
    });
  };
  const [total, setTotal] = useState(1);
  const handleTotal = (type) => {
    if (type == 'UP') {
      setTotal((prev) => prev + 1);
    } else {
      total == 1 ? null : setTotal((prev) => prev - 1);
    }
  };
  const dispatch = useDispatch();
  return (
    <>
      <Header />

      <div className="w-full h-full px-44 py-8  flex flex-row ">
        {detail.length > 0 && (
          <div className="flex flex-row w-full justify-center items-center gap-14">
            <div className="w-80 h-80">
              <img src={detail[0].image} className="w-80 h-80" alt="" />
            </div>
            <div className="flex flex-col gap-6 relative">
              <h1 className="font-semibold text-3xl">{detail[0].name}</h1>
              <h1 className="font-semibold text-xl">₺{detail[0].price}</h1>
              <div className="flex flex-row justify-center items-center gap-x-2">
                <div className="w-auto h-auto flex flex-row items-center justify-center">
                  <div
                    onClick={() => handleTotal('DOWN')}
                    className="border p-2 w-7 text-center cursor-pointer hover:bg-red-400 hover:text-white"
                  >
                    -
                  </div>
                  <div className="border p-2 w-7 text-center pointer-events-none">
                    {total}
                  </div>
                  <div
                    onClick={() => handleTotal('UP')}
                    className="border p-2 w-7 text-center cursor-pointer hover:bg-green-400 hover:text-white"
                  >
                    +
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleBasket({
                      image: detail[0].image,
                      title: detail[0].name,
                      price: detail[0].price,
                      id: detail[0].id,
                      totalnumber: total,
                    })
                  }
                  className="flex cursor-pointer flex-row justify-center items-center text-white bg-orange-500 rounded-lg p-8 w-60 h-auto gap-3"
                >
                  <BsFillBasket3Fill size={24} />
                  SEPETE EKLE
                </div>
              </div>
              <div className="absolute top-0 right-0">
                {detail[0].favorited ? (
                  <AiFillHeart
                    onClick={() => dispatch(handleFavorites(detail[0].id))}
                    size={20}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => dispatch(handleFavorites(detail[0].id))}
                    size={20}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Product;
