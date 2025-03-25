import Image from "next/image";

import FileHandler from "@/components/FileHandler";

const server = "https://luoyisen.com/shareserver/";
const endpoint = "chiikawa/images/";
const url = server + endpoint;

export default async function FileGrid({ slug = [] }: { slug?: string[] }) {
  console.log("slug", slug);
  const fileList = await fetch(url + slug.join("/"), {
    cache: "no-cache",
  })
    .then((res) => res.json())
    .catch(() => []);

  return (
    <div className="w-full h-[93%] sm:h-[92%] flex flex-wrap content-start justify-start p-4 lg:p-8 outline-none">
      {fileList?.map((file: { type: string; name: string }) =>
        file.name.endsWith("sh") ? null : (
          <div
            className="overflow-hidden rounded-md cursor-pointer w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 2xl:w-1/8"
            key={file.name}
          >
            <FileHandler file={file} url={url}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="p-2 w-full h-full">
                  {(file.type === "directory" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-full h-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                  )) ||
                    ((file.name.endsWith(".jpg") ||
                      file.name.endsWith(".jpeg") ||
                      file.name.endsWith(".png") ||
                      file.name.endsWith(".gif") ||
                      file.name.endsWith(".webp")) && (
                      <Image
                        src={
                          "https://pub-13e4b8fe6ec74d69b8a5c3a15bb08711.r2.dev/images/" +
                          (slug.length ? slug.join("/") : "") +
                          (slug.length ? "/" : "") +
                          file.name
                        }
                        alt={file.name}
                        width={100}
                        height={100}
                        className="rounded-md w-full h-auto object-contain"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8ceKaMgAHUQKLM6CQWwAAAABJRU5ErkJggg=="
                        unoptimized
                        loading="lazy" // 保持懒加载
                      />
                    ))}
                  <p className={`text-center`}>
                    {file.type === "directory" ? file.name : ""}
                  </p>
                </div>
              </div>
            </FileHandler>
          </div>
        )
      )}
    </div>
  );
}
