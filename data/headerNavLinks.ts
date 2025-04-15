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
        href: "/images/default",
      },
      {
        name: "网友批图",
        href: "/images/cus",
      },
    ],
  },
  // {
  //   name: "视频",
  //   children: [
  //     {
  //       name: "ちいかわ 吉伊 chiikawa",
  //       href: "/videos/71",
  //     },
  //     {
  //       name: "ハチワレ 小八 hachiware",
  //       href: "/videos/8",
  //     },
  //     {
  //       name: "うさぎ 乌萨奇 usagi",
  //       href: "/videos/537",
  //     },
  //   ],
  // },
  {
    name: "角色介绍",
    children: [
      {
        name: "ちいかわ 吉伊 chiikawa",
        href: "/character/71",
      },
      {
        name: "ハチワレ 小八 hachiware",
        href: "/character/8",
      },
      {
        name: "うさぎ 乌萨奇 usagi",
        href: "/character/537",
      },
    ],
  },
  {
    name: "更多",
    children: [
      {
        name: "友链",
        href: "/more/friendly-link",
      },
      {
        name: "使用方式",
        href: "/more/usetype",
      },
      {
        name: "支持",
        href: "/more/support",
      },
    ],
  },
];

export default headerNavLinks;
