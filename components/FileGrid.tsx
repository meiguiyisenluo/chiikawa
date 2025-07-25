import Image from "next/image";
import Link from "next/link";

import FramerMotionDiv from "@/components/FramerMotionDiv";

const url = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_ACCESS_URL;

export default async function FileGrid({ slug = [] }: { slug?: string[] }) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/cloudflare-r2/images/${slug.join("/")}`,
    {
      cache: "no-cache",
    }
  )
    .then((_) => _.json())
    .catch(() => ({}));
  const fileList =
    res.Contents?.sort((a: { Key: string }, b: { Key: string }) => {
      return (
        parseInt(b.Key.match(/\d+(?=\.)/)![0]) -
        parseInt(a.Key.match(/\d+(?=\.)/)![0])
      );
    }) ?? [];

  return (
    <div className="w-full h-[93%] sm:h-[92%] flex flex-wrap content-start justify-start p-4 lg:p-8 outline-none">
      {fileList.map((file: { type: string; Key: string }) => (
        <div
          className="overflow-hidden rounded-md cursor-pointer w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/6 xl:w-1/6 2xl:w-1/6"
          key={file.Key}
        >
          <Link href={url + "/" + file.Key} target="_blank">
            <div className="w-full h-full flex items-center justify-center">
              <FramerMotionDiv
                className="p-2 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={url + "/" + file.Key}
                  alt={file.Key}
                  width={100}
                  height={100}
                  className="rounded-md w-full h-auto object-contain"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8ceKaMgAHUQKLM6CQWwAAAABJRU5ErkJggg=="
                  unoptimized
                  loading="lazy" // 保持懒加载
                />
              </FramerMotionDiv>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
