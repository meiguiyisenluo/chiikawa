"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@headlessui/react";

import MobileNav from "@/components/MobileNav";
import headerNavLinks from "@/data/headerNavLinks";

import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function Header({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const slug = pathname == "/" ? [] : pathname.split("/").filter(Boolean);

  const jump = (index: number) => {
    const path = `/${slug.slice(0, index).join("/")}`;
    router.push(path);
  };

  return (
    <header className="flex w-full h-[7%] sm:h-[8%] px-4 sticky top-0 bg-inherit shadow-md">
      <Button className="mx-1 hover:text-primary-600" onClick={router.back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </Button>
      <Button className="mx-1 hover:text-primary-600" onClick={router.forward}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </Button>
      <Button className="mx-1 hover:text-primary-600" onClick={router.refresh}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
      <div className="flex items-center ml-2 font-bold">
        <div
          className="cursor-pointer hover:text-primary-900"
          onClick={() => jump(0)}
        >
          {children}
        </div>
        {slug.map((item, index) => (
          <span
            className="cursor-pointer hover:text-primary-900"
            key={index}
            onClick={() => jump(index + 1)}
          >
            /{item}
          </span>
        ))}
      </div>

      <div className={`ml-auto mr-5 flex items-center text-sm`}>
        {headerNavLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hidden sm:block m-2 font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <ThemeSwitch />
      <MobileNav />
    </header>
  );
}
