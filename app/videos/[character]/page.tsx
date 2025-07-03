import edgeConfig from "@/edgeConfig/data";

export async function generateMetadata(props: {
  params: Promise<{ character: string; slug?: string }>;
}) {
  const params = await props.params;
  const { slug = "" } = params;
  const { character } = params;

  let res = "三小只有话对你说";
  if (character === "8") res = "小八有话对你说";
  else if (character === "71") res = "吉伊有话对你说";
  else if (character === "537") res = "乌萨奇有话对你说";

  try {
    // @ts-expect-error 无限对象先不管
    res = edgeConfig.videoData[character][slug].title || res;
  } catch (error) {
    console.log(error);
  }

  return {
    title: res,
  };
}

export default async function Page(props: {
  params: Promise<{ character: string[] }>;
}) {
  const { character } = await props.params;
  return <>{character}</>;
}
