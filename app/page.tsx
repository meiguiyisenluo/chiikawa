import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="py-4 bg-gray-100 dark:bg-transparent">
        <div className="flex justify-around w-full max-w-7xl p-4 lg:p-8 mx-auto ">
          {[
            {
              alt: "三小只",
              src: "/static/images/yobri/default.jpg",
              href: "/images",
            },
            {
              alt: "网友批图",
              src: "/static/images/yobri/cus.jpg",
              href: "/images/cus",
            },
          ].map((item) => (
            <Link href={item.href} key={item.src}>
              <Image
                alt={item.alt}
                src={item.src}
                width={300}
                height={300}
                priority={true}
                className="border-2 border-yellow-200 dark:border-blue-500"
              />
              <p className="font-bold text-center mt-2">{item.alt}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-4">
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
              <Image
                alt={item.alt}
                src={item.src}
                width={300}
                height={300}
                priority={true}
              />
              <p className="font-bold text-center mt-2">{item.alt}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
