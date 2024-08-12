import { X } from "lucide-react";
import Timer from "./Timer";

interface BannerProps {
  title: string;
  description: string;
  dateAndTime: Date;
  url: string;
  closeBanner: () => void;
}

const Banner = ({
  title,
  description,
  dateAndTime,
  url,
  closeBanner,
}: BannerProps) => {
  const parsedDate = new Date(dateAndTime);
  return (
    <>
      <div className="w-7/12 h-[60%] flex flex-col justify-center bg-gradient-to-br from-green-300 to-slate-200 border-2 border-gray-100 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <h3 className="text-3xl text-center font-semibold">{title}</h3>
        <p className="text-md mt-4 text-center mx-8">{description}</p>
        <div className="absolute top-4 right-4 flex justify-center items-center border-2 border-[#606060] rounded-md cursor-pointer">
          <X onClick={closeBanner} className="h-4 w-4" />
        </div>
        <Timer time={parsedDate} />
        <div className="flex mt-10 justify-center">
          <a
            href={url}
            target="_blank"
            className="bg-green-300 p-1 rounded-md px-6 border-[1px] border-b-2 border-r-2 border-black"
          >
            Visit website
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
