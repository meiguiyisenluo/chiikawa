import Link from "next/link";

import edgeConfig from "@/edgeConfig/data";
export default async function FriendlyLink() {
  return (
    <>
      <h2 className="text-center text-lg font-bold">
        喜欢Chiikawa的朋友们，欢迎交换友链
      </h2>

      <br />
      <br />
      <hr />
      <br />
      <br />

      {edgeConfig.friendlyLinkData.map(
        (item: { name: string; href: string }, idx: number) => (
          <div key={idx}>
            <Link
              target="_blank"
              href={item.href}
              className="hover:underline text-blue-500 decoration-blue-500 font-bold"
            >
              <p>{item.name}</p>
            </Link>
          </div>
        )
      )}

      <br />
      <br />

      <ul className="ml-4">
        <li>添加友链请发送邮件至: 1402175410@qq.com</li>
      </ul>
    </>
  );
}
