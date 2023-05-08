import { useRouter } from 'next/navigation';
import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-black static bottom-0 w-full">
      <div className="flex flex-wrap flex-row h-auto bg-black  text-gray-200 px-48  py-8 gap-x-7">
        <div className="flex flex-col gap-3 mt-7">
          <h1 className="font-extrabold">İLETİŞİM</h1>
          <h1 className="font-semibold">ADRES:</h1>
          <p className="text-gray-400">Deneme adres....</p>
          <h1 className="font-semibold">EMAİL:</h1>
          <p className="text-gray-400">info@example.com</p>
          <h1 className="font-semibold">ÇALIŞMA SAATLERİ:</h1>
          <p className="text-gray-400">
            Pzt - Cmt 10.00 - 19.00 I Paz 12.00 - 18.30
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-7">
          <h1 className="font-extrabold">KURUMSAL</h1>

          <p className="text-gray-400 cursor-pointer hover:text-white">
            Sipariş İşlemleri
          </p>
          <p className="text-gray-400 cursor-pointer hover:text-white">
            Bayii İşlemleri
          </p>
          <p className="text-gray-400 cursor-pointer hover:text-white">
            Havale ve Banka Hesabı Bilgileri
          </p>
          <p className="text-gray-400 cursor-pointer hover:text-white">
            İletişim
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-7">
          <h1 className="font-extrabold">MÜŞTERİ İLİŞKİLERİ</h1>

          <p className="text-gray-400 cursor-pointer hover:text-white">
            Aydınlatma Metni
          </p>
          <p className="text-gray-400 cursor-pointer hover:text-white">
            Çerez Politikası
          </p>
          <p className="text-gray-400 cursor-pointer hover:text-white">KVKK</p>
          <p className="text-gray-400 cursor-pointer hover:text-white">
            Mesafeli Satış Sözleşmesi
          </p>
          <p className="text-gray-400 cursor-pointer hover:text-white">
            Ön Bilgilendirme Formu
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-7">
          <h1 className="font-extrabold">SOSYAL MEDYA HESAPLARI</h1>
          <AiFillFacebook
            onClick={() => router.push('https://facebook.com')}
            color="grey"
            className="hover:fill-white cursor-pointer"
            size={24}
          />
          <AiFillTwitterCircle
            onClick={() => router.push('https://twitter.com')}
            color="grey"
            className="hover:fill-white cursor-pointer"
            size={24}
          />
          <AiFillInstagram
            onClick={() => router.push('https://instagram.com')}
            color="grey"
            className="hover:fill-white cursor-pointer"
            size={24}
          />
        </div>
      </div>
      <div className="flex justify-center px-32 py-8 gap-x-7">
        <div className="border-t  w-[90%] text-gray-400">
          <div className="mt-4 flex justify-between items-center">
            <h1>© ÖRNEK ŞİRKET İSMİ. 2023. Tüm Hakları Saklıdır.</h1>
            <div className="flex flex-row gap-5">
              <FaCcMastercard className="hover:text-white " size={24} />
              <FaCcVisa className="hover:text-white " size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
