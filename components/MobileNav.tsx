"use client";

import {
  Dialog,
  Transition,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Fragment, useState, useEffect, useRef } from "react";

import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const navRef = useRef(null);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current!);
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current!);
      }
      return !status;
    });
  };

  useEffect(() => {
    return clearAllBodyScrollLocks;
  });

  return (
    <nav className="h-6">
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <Dialog.Panel className="fixed left-0 top-0 z-70 h-full w-full bg-white opacity-95 duration-300 dark:bg-gray-950 dark:opacity-[0.98]">
              <nav
                ref={navRef}
                className="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto pl-12 pt-2 text-left"
              >
                {headerNavLinks.map((item) => {
                  if ("href" in item) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mb-4 py-2 pr-4 text-2xl  tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                        onClick={onToggleNav}
                      >
                        {item.name}
                      </Link>
                    );
                  }

                  if ("children" in item) {
                    return (
                      <Disclosure key={item.name} defaultOpen={false}>
                        <DisclosureButton className="mb-4 py-2  group flex w-full items-center justify-between">
                          <span className="text-2xl text-gray-900 group-data-[hover]::text-primary-500 dark:text-gray-100 dark:group-data-[hover]::text-primary-400">
                            {item.name}
                          </span>
                          <ChevronDownIcon className="mr-8 size-8 fill-black/60 dark:fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180 transition-transform" />
                        </DisclosureButton>
                        <DisclosurePanel
                          transition
                          className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                        >
                          {item.children.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block ml-2 py-1 pr-4 text-xl tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                              onClick={onToggleNav}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    );
                  }
                })}
              </nav>

              <button
                className="fixed right-4 top-7 z-80 h-16 w-16 p-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </nav>
  );
};

export default MobileNav;
