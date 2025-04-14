import Image from "next/image";
import Link from "next/link";

import FramerMotionDiv from "@/components/FramerMotionDiv";
import MainSwiper from "@/components/MainSwiper";

export default async function Page() {
  const sliderData = await fetch(
    `${process.env.BASE_URL}/api/edge-config-store/sliderData`
  ).then((_) => {
    console.log(_.text());
    return _.json();
  });

  return (
    <>
      <MainSwiper sliderData={sliderData}></MainSwiper>

      <div className="py-4 bg-gray-100 dark:bg-transparent">
        <div className="w-full max-w-7xl p-4 lg:p-8 mx-auto flex justify-between">
          {[
            {
              alt: "小八 hachiware",
              src: "/static/images/yobri/8.webp",
              href: "/images/8",
            },
            {
              alt: "吉伊 chiikawa",
              src: "/static/images/yobri/71.webp",
              href: "/images/71",
            },
            {
              alt: "乌萨奇 usagi",
              src: "/static/images/yobri/537.webp",
              href: "/images/537",
            },
          ].map((item) => (
            <Link href={item.href} key={item.src}>
              <FramerMotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  alt={item.alt}
                  src={item.src}
                  width={300}
                  height={300}
                  priority={true}
                  unoptimized
                />
                <p className="font-bold text-center mt-2">{item.alt}</p>
              </FramerMotionDiv>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-4 bg-gray-100 dark:bg-transparent">
        <div className="flex justify-around w-full max-w-7xl p-4 lg:p-8 mx-auto ">
          {[
            {
              alt: "三小只",
              src: "/static/images/yobri/default.jpg",
              href: "/images/default",
            },
            {
              alt: "网友批图",
              src: "/static/images/yobri/cus.jpg",
              href: "/images/cus",
            },
          ].map((item) => (
            <Link href={item.href} key={item.src}>
              <FramerMotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  alt={item.alt}
                  src={item.src}
                  width={300}
                  height={300}
                  priority={true}
                  className="border-2 border-yellow-200 dark:border-blue-500"
                  unoptimized
                />
                <p className="font-bold text-center mt-2">{item.alt}</p>
              </FramerMotionDiv>
            </Link>
          ))}
        </div>
      </div>

      {Array.from({ length: 18 }, (v, k) => {
        k += 1;
        const l = k < 10 ? "0" + k : k;
        const src = `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_ACCESS_URL}/poster/${l}.jpg`;
        return (
          <Link href="/images/default" key={l}>
            <FramerMotionDiv
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                alt={src}
                src={src}
                width={1200}
                height={500}
                // priority={k < 5}
                className="w-full h-auto object-contain"
                unoptimized
                loading="lazy"
              />
            </FramerMotionDiv>
          </Link>
        );
      })}
    </>
  );
}
