import Image from "next/image";
export default function Loading() {
  return (
    <div className="animate-pulse fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="relative w-[100px] h-[73px] sm:w-[150px] sm:h-[110px]">
        <Image
          alt="loading.gif"
          src="/static/images/loading.gif"
          fill={true}
          className="object-contain"
          priority={true}
        />
      </div>
    </div>
  );
}
