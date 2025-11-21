import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <>
      <h2 className="text-center text-lg font-bold">
        支持 Chiikawa 表情包站，让我们一起更可爱、更有趣！
      </h2>

      <br />

      <p className="indent-[2em]">
        亲爱的用户朋友们，
        谢谢你们的使用与支持！这个网站完全由我个人独立开发和维护，希望能够为大家带来更多可爱的
        Chiikawa
        表情包和愉快的体验！如果你有任何功能建议、表情包添加需求或改进意见，欢迎通过以下方式联系我，我会努力为你们优化！
      </p>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <p className="font-bold">告诉我你的想法：</p>
      <br />
      <ul className="ml-4">
        <li>
          {" "}
          <span className="font-bold">功能建议：</span> 想要哪些新功能？
        </li>
        <li>
          <span className="font-bold">表情包需求：</span> 有哪些必备的 Chiikawa
          表情还没上架？
        </li>
        <li>
          <span className="font-bold">改进建议：</span> 哪些地方可以优化体验？
        </li>
      </ul>

      <br />
      <p className="font-bold">联系方式：</p>
      <br />
      <ul className="ml-4">
        <li>
          <span className="font-bold">邮箱：</span> 1402175410@qq.com
        </li>
      </ul>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <p className="font-bold">支持我继续开发这个网站</p>
      <br />
      <p>
        目前，我正在自费维护这个网站。如果你觉得它好用或者帮助到了你，以下几种方式能够让我坚持下去，也可以继续为大家提供更好的内容与服务：
      </p>
      <br />

      <ul>
        <li>
          <p className="font-bold">1. 分享网站</p>
          <p className="indent-[2em]">
            把这个网站分享给你的朋友们！当积累了一定的流量后，可能会接一些广告收入来支持运营。当然，我会尽量让广告不影响你们的正常使用。
          </p>
          <br />
        </li>
        <li>
          <p className="font-bold">2. GitHub 点个 Star</p>
          <p className="indent-[2em]">
            访问网站的{" "}
            <Link
              href={"https://github.com/meiguiyisenluo/chiikawa"}
              target="_blank"
              className="text-blue-500"
            >
              源码页面
            </Link>
            ，给我点个小星星 🌟！
            这对我未来找工作非常有帮助，也让我更有动力继续完善。
          </p>
          <br />
        </li>
        <li>
          <p className="font-bold">3. 网站顶部点一下星星</p>
          <p className="indent-[2em]">
            在网站的顶部，给我点个小星星 🌟！ 这对我也非常有帮助
          </p>
          <br />
        </li>
        {/* <li>
          <p className="font-bold">3. 直接支持</p>
          <div className="indent-[2em]">
            如果你愿意，可以通过以下方式直接支持我：
            <div className="flex">
              <Image
                alt="wechat"
                src="/static/images/support/wechat.jpg"
                width={100}
                height={100}
                className="w-[150px] sm:w-[200px] h-auto object-contain"
                priority={true}
                unoptimized
              />
              <Image
                alt="paypal"
                src="/static/images/support/paypal.jpg"
                width={100}
                height={100}
                className="w-[150px] sm:w-[200px] h-auto object-contain"
                priority={true}
                unoptimized
              />
            </div>
          </div>
        </li> */}
      </ul>
    </>
  );
}
