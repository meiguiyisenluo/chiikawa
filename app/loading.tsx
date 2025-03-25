import Image from "next/image";
export default function Loading() {
  return (
    <div className="animate-pulse fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <Image
        alt="loading.gif"
        src="/static/images/loading.gif"
        width={0}
        height={0}
        className="w-[100px] sm:w-[150px] h-auto object-contain"
        priority={true}
        loading="eager"
      />
    </div>
  );
}
