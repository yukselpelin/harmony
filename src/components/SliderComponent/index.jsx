import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useRef } from 'react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`absolute top-1/2 right-0 p-4 z-20 rounded-full  ${className}`}
      style={{ ...style, width: '40px', height: '40px' }}
      onClick={onClick}
    >
      <BsChevronRight size="24" color="gray" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`absolute top-1/2 left-0 p-4 z-20 rounded-full  ${className}`}
      style={{ ...style, width: '40px', height: '40px' }}
      onClick={onClick}
    >
      <BsChevronLeft size="24" color="gray" />
    </button>
  );
}

let settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderComponent = () => {
  const pictures = [
    {
      id: 1,
      src: 'https://cangozmuzik.com.tr/uploads/p/p/Nux-WK-400-Dijital-Piyano-Tabureli_1.jpg',
      alt: 'Piyanolar',
    },
    {
      id: 2,
      src: 'https://cangozmuzik.com.tr/uploads/p/p/s/Casio-SA-51H2-32-Tuslu-Siyah-Mini-Org_1.jpeg?v=1680775980',
      alt: 'Tuşlular',
    },
    {
      id: 3,
      src: 'https://cangozmuzik.com.tr/uploads/p/p/ESP-LTD-J-310E-Natural-Satin-Elektro-Akustik-Gitar_1jpg_1.jpg',
      alt: 'Gitarlar',
    },
    {
      id: 4,
      src: 'https://cangozmuzik.com.tr/uploads/p/p/Carlovy-CLA9-44-Cello_1.jpg',
      alt: 'Yaylılar',
    },
    {
      id: 5,
      src: 'https://cangozmuzik.com.tr/uploads/p/p/Leblanc-CL650-Bb-Sb-Klarnet_1.jpg',
      alt: 'Nefesliler',
    },
    {
      id: 6,
      src: 'https://cangozmuzik.com.tr/uploads/p/p/Yamaha-Stage-Custom-Birch-Akustik-Davul-Seti-JSBP0F5CR_1.jpg',
      alt: 'Davul',
    },
    {
      id: 7,
      src: 'https://cangozmuzik.com.tr/uploads/p/p/On-Stage-KS7903-3Lu-Org-Standi_1.jpg?v=1675167386',
      alt: 'Aksesuar',
    },
  ];
  const router = useRouter();

  return (
    <Slider className="w-full" {...settings} clickable={true}>
      {pictures.map((picture) => (
        <div key={picture.id}>
          <img
            onClick={() => {
              router.push(`/category/${picture.alt}`);
            }}
            src={picture.src}
            alt={picture.alt}
            className="w-[100%] h-[50%] object-contain rounded-lg mx-auto cursor-pointer"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
