const titles: Record<string, Record<string, string>> = {
  "8": {
    "04": "小八想听你说话",
  },
};

export async function generateMetadata(props: {
  params: Promise<{ character: string; slug?: string }>;
}) {
  const { character, slug = "" } = await props.params;
  let res = "三小只有话对你说";
  if (character === "8") {
    res = titles[character][slug] || "小八有话对你说";
  } else if (character === "71") res = "吉伊有话对你说";
  else if (character === "537") res = "乌萨奇有话对你说";

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
