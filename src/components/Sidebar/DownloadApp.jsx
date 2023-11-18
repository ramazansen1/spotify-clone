import { MdOutlineDownloading } from "react-icons/md";

const DownloadApp = () => {
  return (
    <a
      href=""
      className=" flex items-center flex-shrink-0 h-10 text-lg font-semibold text-link hover:text-white px-6 gap-x-4 "
    >
      <MdOutlineDownloading />
      <span className="text-sm">Uygulamayı Yükle</span>
    </a>
  );
};

export default DownloadApp;
