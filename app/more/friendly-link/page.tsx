import Link from "next/link";

export default async function FriendlyLink() {
  const friendlyLinkData = await fetch(
    `${process.env.BASE_URL}/api/edge-config-store/friendlyLinkData`,
    { cache: "no-store" }
  )
    .then(async (_) => {
      return JSON.parse(await _.text());
    })
    .catch(() => []);

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

      {friendlyLinkData.map(
        (item: { name: string; href: string }, idx: number) => (
          <Link
            as={"div"}
            key={idx}
            href={item.href}
            className="hover:underline text-blue-500 decoration-blue-500 font-bold"
          >
            <p>{item.name}</p>
          </Link>
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
