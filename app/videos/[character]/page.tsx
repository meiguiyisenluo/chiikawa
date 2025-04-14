const videoMetas: Record<string, Record<string, { title: string }>> = {
  "8": {
    "01": { title: "来听小八唱首歌" },
    "04": { title: "小八想听你说话" },
  },
  san: {
    "01": { title: "宝宝，离别是成长的第一课" },
  },
};

export async function generateMetadata(props: {
  params: Promise<{ character: string; slug?: string }>;
}) {
  const params = await props.params;
  const { slug = "" } = params;
  let { character } = params;
  if (character === "default") character = "san";

  let res = "三小只有话对你说";
  if (character === "8") res = "小八有话对你说";
  else if (character === "71") res = "吉伊有话对你说";
  else if (character === "537") res = "乌萨奇有话对你说";

  res = videoMetas[character][slug].title || res;

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
