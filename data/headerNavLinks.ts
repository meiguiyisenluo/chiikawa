export type NavItem = { name: string };
export type HrefNavItem = NavItem & { href: string };
export type ChildrenNavItem = NavItem & { children: Array<HrefNavItem> };

const headerNavLinks: Array<HrefNavItem | ChildrenNavItem> = [
  {
    name: "首页",
    href: "/",
  },
  {
    name: "表情包",
    children: [
      {
        name: "吉伊 chiikawa",
        href: "/images/71",
      },
      {
        name: "小八 hachiware",
        href: "/images/8",
      },
      {
        name: "乌萨奇 usagi",
        href: "/images/537",
      },
      {
        name: "三小只",
        href: "/images",
      },
      {
        name: "网友批图",
        href: "/images/cus",
      },
    ],
  },
  {
    name: "更多",
    children: [
      {
        name: "使用方式",
        href: "/usetype",
      },
      {
        name: "支持",
        href: "/support",
      },
    ],
  },
];

export default headerNavLinks;
