import FileGrid from "@/components/FileGrid";

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug = [] } = await props.params;
  let res = "好多chiikawa表情包呀";
  if (slug[0] === "8") res = "好多小八表情包呀";
  else if (slug[0] === "71") res = "好多吉伊表情包呀";
  else if (slug[0] === "537") res = "好多乌萨奇表情包呀";
  return {
    title: res,
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params;
  return <FileGrid slug={slug} />;
}
