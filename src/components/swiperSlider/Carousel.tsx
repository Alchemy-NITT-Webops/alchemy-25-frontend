


import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-fade';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image from '../../assets/logo.png'
export default () => {
  // Sample image URLs - replace these with your own images
  
  const images = [


    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image
  ];

  return (
    <div className="h-screen max-w-[95vw] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        effect={'fade'}
        fadeEffect={{crossFade: true}}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className='w-full h-full'
        
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index} >
            <div className=" w-full py-40 h-full flex items-center justify-center">
              <div className={`flex w-full rounded-[100px] ${index%2==0? 'bg-red-950': 'bg-green-700'} h-full items-center justify-center`}>
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};