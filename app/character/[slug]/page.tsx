import Image from "next/image";
import Link from "next/link";

import { roleList, Character } from "./data";

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="flex flex-col md:flex-row my-4 items-center bg-white dark:bg-transparent shadow-lg rounded-lg overflow-hidden p-4 sm:p-8 max-w-4xl mx-auto">
      {/* 头像 */}
      <div className="flex-shrink-0 mb-4 md:mb-0 self-center md:self-start">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className="rounded-full"
          unoptimized
        />
      </div>
      {/* 人物信息 */}
      <div className="flex flex-col md:text-left md:ml-6 text-gray-800 dark:text-white/50">
        <h2 className="text-center text-2xl font-bold">{character.name}</h2>
        <br />
        <p>
          <span className="font-bold">生日：</span>
          {character.birth.year}年{character.birth.month}月
          {character.birth.date}日
        </p>
        <br />
        <p>
          <span className="font-bold">武器：</span>
          {character.weapon}
        </p>
        <br />
        <p>
          <span className="font-bold">住所：</span>
          {character.domicile}
        </p>

        {character.descriptions.map((desc, idx) => (
          <div key={idx}>
            <p className="mt-2 indent-[2em]">{desc}</p>
            <br />
          </div>
        ))}

        <Link
          className="flex font-bold text-blue-500 dark:text-red-500"
          href={character.link}
        >
          <span className="mr-1">想要 {character.name} 的表情包</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default async function CharacterPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const character = roleList[slug];

  return <CharacterCard character={character} />;
}
