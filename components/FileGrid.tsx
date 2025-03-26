import Image from "next/image";
import Link from "next/link";

const url = process.env.CLOUDFLARE_R2_PUBLIC_ACCESS_URL;

export default async function FileGrid({ slug = [] }: { slug?: string[] }) {
  const fileList = await fetch(
    `${process.env.BASE_URL}/api/cloudflare-r2/${slug.join("/")}`,
    {
      cache: "no-cache",
    }
  )
    .then((res) => res.json())
    .catch(() => ({}));

  return (
    <div className="w-full h-[93%] sm:h-[92%] flex flex-wrap content-start justify-start p-4 lg:p-8 outline-none">
      {fileList.Contents?.map((file: { type: string; Key: string }) => (
        <div
          className="overflow-hidden rounded-md cursor-pointer w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 2xl:w-1/8"
          key={file.Key}
        >
          <Link href={url + "/" + file.Key} target="_blank">
            <div className="w-full h-full flex items-center justify-center">
              <div className="p-2 w-full h-full">
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
                <p className={`text-center`}>
                  {file.type === "directory" ? file.Key : ""}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
