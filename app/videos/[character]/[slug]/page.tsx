import { generateMetadata as parentGenerateMetadata } from "../page";

export const generateMetadata = parentGenerateMetadata;

import Player from "next-video/player";

export default async function Page(props: {
  params: Promise<{ slug: string; character: string }>;
}) {
  const { slug, character } = await props.params;
  return (
    <div className="max-w-[1200px] w-full mx-auto mb-auto rouned-lg shadow-lg">
      <Player
        loop
        autoPlay
        playsInline
        src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_ACCESS_URL}/videos/${character}/${slug}.mp4`}
      />
    </div>
  );
}

