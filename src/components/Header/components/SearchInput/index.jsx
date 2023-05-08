import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
const SearchInput = () => {
  //Arama kısmının yazısını almak ve react e bildirebilmek için state tanımladık.
  const [search, setSearch] = useState('');
  //yönlendirme işlemi için router tanımlayarak arama kısmındaki button a verdik.
  const router = useRouter();

  const handleEnter = (e) => {
    // event den key in ne olduğunu alıyoruz
    if (e.key == 'Enter') {
      // Eğer tuş Enter a eşitse /products a search state inde bulunan değer ile yönlendirmeyi yapıyoruz alternatif olarak keyCode kullanılabilir
      router.push(`/products/${search ? search : ''}`);
      // Search yok ise direkt olarak hatalı bir yönlendirme olabileceği için koşullu olarak değer veriyoruz
    }
  };

  const handleSearch = () => {
    if (search) {
      // search state i boş mu değil mi diye kontrol ediyoruz eğer boş ise boşluk değilse değerin kendisini veriyoruz ve yönlendiriyoruz
      router.push(`/products/${search}`);
    } else {
      router.push('/products');
    }
  };

  return (
    <div className="relative border-2 rounded-2xl">
      <input
        type="text"
        className="bg-white rounded-full  py-2 px-4  pr-8 focus:outline-none focus:shadow-outline w-[70vh]"
        placeholder="Ara..."
        onChange={(e) => setSearch(e.currentTarget.value)}
        onKeyDown={handleEnter}
      />
      <div
        onClick={(e) => handleSearch(e)}
        className="absolute cursor-pointer inset-y-0 right-0 flex items-center pr-4 "
      >
        <FiSearch size={24} color="black" />
      </div>
    </div>
  );
};

export default SearchInput;
