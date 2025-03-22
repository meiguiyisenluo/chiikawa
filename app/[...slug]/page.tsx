import FileGrid from "@/components/FileGrid";

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params;
  let res = slug[1];
  if (!res) res = slug[0];
  else if (slug[1] === "8") res = "小八";
  else if (slug[1] === "71") res = "吉伊";
  else if (slug[1] === "537") res = "乌萨奇";
  return {
    title: res,
    description: res,
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params;
  return <FileGrid slug={slug} />;
}
