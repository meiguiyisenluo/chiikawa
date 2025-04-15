export default function Support({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-7xl h-[93%] sm:h-[92%] p-4 lg:p-8 mx-auto outline-none">
      {children}

      <br />
      <br />
      <hr />
      <br />
      <br />

      <p className="font-bold">感谢你的支持！</p>
      <br />
      <p className="indent-[2em]">
        因为有你们的陪伴，这个网站才更有意义！
        希望你们用得开心，也期待和你们一起创造更有爱的 Chiikawa 社区！
      </p>
    </div>
  );
}
