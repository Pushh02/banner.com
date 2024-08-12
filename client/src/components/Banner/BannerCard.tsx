import { useState } from "react";
import Banner from "./Banner";

interface BannerCardProps {
  title: string;
  description: string;
  dateAndTime: Date;
  url: string;
}

const BannerCard = ({
  title,
  description,
  dateAndTime,
  url,
}: BannerCardProps) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const parsedDate = new Date(dateAndTime);
  return (
    <>
      {isBannerOpen && (
        <Banner
          title={title}
          description={description}
          dateAndTime={dateAndTime}
          url={url}
          closeBanner={() => setIsBannerOpen(false)}
        />
      )}
      <div
        onClick={() => setIsBannerOpen(true)}
        className="h-32 w-60 rounded-lg bg-emerald-400 flex flex-col justify-center items-center cursor-pointer border-[1px] border-black"
      >
        <p className="text-lg font-bold">{title}</p>
        <p>
          {parsedDate.getDate()}th {parsedDate.getMonth()}{" "}
          {parsedDate.getFullYear()} - {parsedDate.getHours()}:
          {parsedDate.getMinutes()}
        </p>
      </div>
    </>
  );
};

export default BannerCard;
