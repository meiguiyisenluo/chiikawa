"use client";

import Link from "next/link";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MainSwiper.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function MainSwiper({
  sliderData,
}: {
  sliderData: Array<{ src: string; href: string }>;
}) {
  return (
    <div className="bg-gray-100 dark:bg-transparent">
      <Swiper
        className="my-custom-swiper w-full max-w-[1200px] max-h-[966px]"
        loop
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {sliderData.map((item, idx) => {
          const src = `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_ACCESS_URL}${item.src}`;
          return (
            <SwiperSlide key={idx}>
              <Link className="w-full" href={item.href}>
                <Image
                  alt={item.src}
                  src={src}
                  width={1920}
                  height={1080}
                  priority={true}
                  className="object-scale-down"
                  unoptimized
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
