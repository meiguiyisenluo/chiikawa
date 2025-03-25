import MobileNav from "@/components/MobileNav";
import headerNavLinks from "@/data/headerNavLinks";

import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import Image from "next/image";

import { siteMetadata } from "@/data/siteMetadata";

export default function Header() {
  return (
    <header className="flex items-center w-full h-[7%] sm:h-[8%] px-4 sticky top-0 bg-inherit shadow-md">
      <Image
        src="/static/images/logo.gif"
        alt="logo.gif"
        width={50}
        height={0}
        priority
        unoptimized
        className="mr-2"
      ></Image>
      <Link href={"/"}>
        <h1 className="font-bold text-lg">{siteMetadata.title}</h1>
      </Link>

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
