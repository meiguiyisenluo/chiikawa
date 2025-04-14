export async function generateMetadata(props: {
  params: Promise<{ character: string; slug?: string }>;
}) {
  const videoData = await fetch(
    `${process.env.BASE_URL}/api/edge-config-store/videoData`
  )
    .then((_) => _.json())
    .catch(() => ({}));

  const params = await props.params;
  const { slug = "" } = params;
  const { character } = params;

  let res = "三小只有话对你说";
  if (character === "8") res = "小八有话对你说";
  else if (character === "71") res = "吉伊有话对你说";
  else if (character === "537") res = "乌萨奇有话对你说";

  try {
    res = videoData[character][slug].title || res;
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
