import Image from "next/image";

import FileHandler from "@/components/FileHandler";

const server = "https://luoyisen.com/shareserver/";
const endpoint = "chiikawa/images/";
const url = server + endpoint;

export default async function FileGrid({ slug = [] }: { slug?: string[] }) {
  const fileList = await fetch(url + slug.join("/"), {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <main className="w-full h-[93%] sm:h-[95%] flex flex-wrap content-start justify-start overflow-y-auto overflow-x-hidden">
      {fileList.map((file: { type: string; name: string }) => (
        <div
          className="overflow-hidden rounded-md cursor-pointer"
          key={file.name}
        >
          <FileHandler file={file} url={url}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="p-2">
                {(file.type === "directory" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-24"
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
                      className="rounded-md"
                      src={url + slug.join("/") + "/" + file.name}
                      alt={file.name}
                      width={100}
                      height={100}
                    />
                  )) ||
                  (file.type === "file" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  ))}
                <p className="text-center">{file.name}</p>
              </div>
            </div>
          </FileHandler>
        </div>
      ))}
    </main>
  );
}
