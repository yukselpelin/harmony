import Link from 'next/link';
import ProductCard from '../../components/productcard';
import Header from '@/components/Header';
import { useSelector } from 'react-redux';
import Footer from '@/components/Footer';

function FavoritesPage() {
  const products = useSelector((state) => state.basket.products);
  const favorites = products.filter((item) => item.favorited == true);

  return (
    <>
      <Header />
      <div className="p-4">
        {/* Eğer favoriler dizisinin uzunluğu 1 den uzunsa yani içinde bir ürün var ise mapliyoruz
        Eğer şart koymaz isek favorisi olmayan kullanıcılarda sürekli hata verir bu yüzden
        Şarta bağlıyoruz. Eğer favorileri boş ise Favori Ürünleriniz yok! mesajını ve anasayfaya dönebilmesi
        için bir link koyuyoruz
        */}
        <h1 className="text-center text-3xl mt-2 font-extrabold space tracking-wider uppercase">
          Favoriler
        </h1>
        <div className="flex flex-col justify-center items-center w-full flex-wrap ">
          {favorites.length > 0 ? (
            favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold mb-4">Favori ürünleriniz yok!</p>
              <Link
                href="/"
                className="text-white px-4 py-4 bg-black rounded-lg hover:underline"
              >
                Anasayfaya dön
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FavoritesPage;
