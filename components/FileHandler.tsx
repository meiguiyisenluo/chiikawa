"use client";
import { useRouter, usePathname } from "next/navigation";

export default function FileHandler({
  children,
  file,
  url,
}: {
  children: React.ReactNode;
  file: {
    name: string;
    type: string;
  };
  url: string;
}) {
  const router = useRouter();
  let pathname = usePathname();
  pathname = pathname === "/" ? "" : pathname;

  const jump = () => {
    const path = pathname + "/" + file.name;
    if (file.type === "directory") {
      router.push(path);
    } else {
      window.open(url + "/" + path);
    }
  };

  return (
    <div onClick={jump} className="w-full h-full">
      {children}
    </div>
  );
}
