import React from "react";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  CloseButton,
} from "@headlessui/react";

import MobileNav from "@/components/MobileNav";
import headerNavLinks from "@/data/headerNavLinks";

import Stars from "@/components/Stars";
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import Image from "next/image";

import { siteMetadata } from "@/data/siteMetadata";

export default async function Header() {
  const { result: stars } = await fetch(
    `${process.env.BASE_URL}/api/upstash-kv/stars`
  )
    .then((_) => _.json())
    .catch(() => ({ result: 0 }));
  return (
    <header className="flex items-center w-full h-[7%] sm:h-[8%] px-4 sticky z-40 top-0 bg-inherit shadow-md">
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
        <nav className="hidden sm:flex items-center">
          {headerNavLinks.map((item) => {
            if ("href" in item)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="m-2 block text-sm/6 font-semibold focus:outline-none hover:text-black/100 dark:text-white/50  dark:hover:text-white"
                >
                  {item.name}
                </Link>
              );

            if ("children" in item)
              return (
                <Popover key={item.name} className="m-2 ">
                  <PopoverButton className="block text-sm/6 font-semibold focus:outline-none data-[hover]:text-black/100 data-[active]:text-black/100 dark:text-white/50 dark:data-[active]:text-white dark:data-[hover]:text-white">
                    {item.name}
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    anchor="bottom"
                    className="z-50 divide-y divide-white/5 rounded-xl bg-black/50 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                  >
                    <div className="p-3">
                      {item.children?.map((item) => (
                        <CloseButton
                          as={Link}
                          key={item.name}
                          className="block rounded-lg py-2 px-3 transition hover:bg-black/50"
                          href={item.href}
                        >
                          <p className="font-semibold text-white">
                            {item.name}
                          </p>
                        </CloseButton>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              );
          })}
        </nav>
      </div>

      <Stars stars={stars} />
      <ThemeSwitch />
      <MobileNav />
    </header>
  );
}
