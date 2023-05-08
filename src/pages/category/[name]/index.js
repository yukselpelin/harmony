import FilterComponent from '@/components/Filter';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Spcard from '@/components/Searchandproductcard';
import { addToBasket } from '@/redux/slice/basket';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

const Category = () => {
  const router = useRouter();
  const { name } = router.query;
  const products = useSelector((state) => state.basket.products);
  const filtered = products.filter((item) => item.category.includes(name));
  // Sayfa numarası ve sayfa başına ürün sayısı state'leri
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 6;

  // Dizinin kaçıncı indisinden başlayacağımızı hesapla
  const startIndex = (pageNumber - 1) * itemsPerPage;

  // Diziyi dilimle ve sadece sayfa başına belirtilen sayıda ürün gösteren bir alt küme oluştur
  const paginatedProducts = filtered.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
    <>
      <Header />
      <div className="flex flex-row md:items-center md:justify-between mt-2 md:px-40 gap-4">
        <FilterComponent />

        <div className="w-[80%] h-full flex  justify-center flex-row gap-10 flex-wrap">
          {paginatedProducts.map((item) => {
            return <Spcard key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded-l disabled:opacity-60"
        >
          Önceki Sayfa
        </button>

        <button
          disabled={startIndex + itemsPerPage >= filtered.length}
          onClick={() => setPageNumber(pageNumber + 1)}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded-r disabled:opacity-60"
        >
          Sonraki Sayfa
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Category;
