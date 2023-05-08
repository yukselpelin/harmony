import Link from 'next/link';
import { FiMenu, FiSearch } from 'react-icons/fi';

import SearchInput from './components/SearchInput';
import { useState } from 'react';
import Basket from './components/Basket';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [subMenu, setSubmenu] = useState();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menu = [
    {
      id: 1,
      name: 'Piyanolar',
      submenu: [
        {
          id: 11,
          name: 'Dijital Piyanolar',
        },
        {
          id: 12,
          name: 'Analog Piyanolar',
        },
      ],
    },
    {
      id: 2,
      name: 'Tuşlular',
      submenu: [
        {
          id: 22,
          name: 'Synthesizer',
        },
        {
          id: 23,
          name: 'Ritimli Klavyeler',
        },
      ],
    },
    ,
    {
      id: 17,
      name: 'Gitarlar',
      submenu: [
        {
          id: 37,
          name: 'Elektro Gitar',
        },
        {
          id: 38,
          name: 'Klasik Gitar',
        },
      ],
    },
    {
      id: 18,
      name: 'Yaylılar',
      submenu: [
        {
          id: 47,
          name: 'Viyolalar',
        },
        {
          id: 48,
          name: 'Çellolar',
        },
      ],
    },
    {
      id: 19,
      name: 'Nefesliler',
      submenu: [
        {
          id: 57,
          name: 'Klarnetler',
        },
        {
          id: 58,
          name: 'Yan Flütler',
        },
        {
          id: 59,
          name: 'Saksafonlar',
        },
        {
          id: 60,
          name: 'Mızıkalar',
        },
      ],
    },
    {
      id: 20,
      name: 'Davul',
      submenu: [
        {
          id: 67,
          name: 'Akustik Davullar',
        },
        {
          id: 68,
          name: 'Elektronik Davullar',
        },
      ],
    },
    {
      id: 21,
      name: 'Aksesuar',
      submenu: [
        {
          id: 77,
          name: 'Sehpa & standlar',
        },
        {
          id: 78,
          name: 'Kablolar',
        },
        {
          id: 79,
          name: 'Akort Aletleri',
        },
        {
          id: 80,
          name: 'Metronomlar',
        },
      ],
    },
  ];

  const handleSelect = (id) => {
    if (subMenu == id) {
      setSubmenu('');
    } else {
      setSubmenu(id);
    }
  };

  return (
    <>
      <header className="bg-white w-full">
        <div className="container w-full mx-auto px-4 xl:px-40 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl">Harmony House</h1>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              <FiMenu size={24} />
            </button>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            <SearchInput />
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/favoriler" className=" hover:text-gray-300 px-3 py-2">
              Favoriler
            </Link>
            <Basket />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="bg-gray-900">
              <Link
                href="/"
                className="block text-white hover:text-gray-300 py-2 px-4"
              >
                Anasayfa
              </Link>
              <Link
                href="/favoriler"
                className="block text-white hover:text-gray-300 py-2 px-4"
              >
                Favoriler
              </Link>
              <Link
                href="/sepet"
                className="block text-white hover:text-gray-300 py-2 px-4"
              >
                Sepet
              </Link>

              {menu.map((item) => {
                return (
                  <div
                    key={item.id + 33}
                    className="flex flex-row w-full justify-between relative cursor-pointer"
                    onClick={() => handleSelect(item.id)}
                  >
                    <Link
                      href={`/category/${item.name}`}
                      className="block text-white hover:text-gray-300 py-2 px-4"
                      onClick={() => handleSelect(item.id)}
                    >
                      {item.name}
                      {subMenu === item.id && (
                        <div className="bg-gray-800 py-2 px-4 absolute top-2 left-0 w-full  border-b mt-9 z-50">
                          {item.submenu.map((subItem) => {
                            return (
                              <Link
                                key={subItem.id * 24}
                                href={`/category/${subItem.name}`}
                                className="block text-white hover:text-gray-300 py-2 px-4"
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-800 rounded-full py-2 px-4 xl:px-40 text-gray-100 pl-12 pr-8 focus:outline-none focus:shadow-outline w-full"
                  placeholder="Ara..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <FiSearch color={'white'} size={24} />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="hidden bg-black  mx-auto w-full px-4  py-4 md:block items-center justify-center">
          <div onClick={handleSelect}>
            <ul className="hidden md:flex flex-row justify-center items-center">
              {menu.map((item) => {
                return (
                  <div key={item.id * 14}>
                    <Link
                      href={`/category/${item.name}`}
                      className="block text-white hover:text-gray-300 py-2 px-4 relative"
                      onMouseEnter={() => handleSelect(item.id)}
                      onMouseLeave={() => handleSelect('')}
                    >
                      {item.name}
                      {subMenu === item.id && (
                        <div className="bg-white text-black py-2 px-4 absolute w-[70vh] top-[90%] left-0 z-40 border border-gray-400 rounded-sm">
                          <div className="" />
                          {item.submenu.map((subItem) => {
                            return (
                              <Link
                                key={subItem.id}
                                href={`/category/${subItem.name}`}
                                className="block hover:text-gray-600 py-2 px-4 z-40 transition-shadow hover:shadow-xl"
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
