export default function Footer() {
  return (
    <footer className="text-center py-4 bg-gray-100 border-t border-gray-300 dark:bg-black dark:border-gray-300 ">
      <p className="text-sm text-gray-600 dark:text-white">
        © 2025 Chiikawa 表情包站. 保留所有权利.
      </p>
      <p className="text-sm text-gray-600 dark:text-white">
        免责声明：所有表情包素材来源于网络，如有侵权，请联系我们处理。
      </p>
      <p className="text-sm text-gray-600 dark:text-white">
        联系方式：
        <a
          href="mailto:1402175410@qq.com"
          className="text-blue-500 hover:underline"
        >
          1402175410@qq.com
        </a>
      </p>
      <p className="text-sm text-gray-600 dark:text-white">版本号: V0.0.1</p>
    </footer>
  );
}
