"use client";

import Link from "next/link";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function MainSwiper() {
  return (
    <Swiper
      className="w-full"
      loop
      spaceBetween={5}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {[
        {
          href: "/videos/8/01",
          src: "/sliders/01.png",
        },
        {
          href: "/videos/default/01",
          src: "/sliders/02.png",
        },
      ].map((item, idx) => {
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
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
