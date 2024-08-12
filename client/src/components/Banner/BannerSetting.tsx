import { X } from "lucide-react";
import { useState } from "react";

import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BannerProps {
  closeBanner: () => void;
}

const bannerSchema = z.object({
  title: z.string().min(1, {
    message: "title is required",
  }),
  description: z.string(),
  dateAndTime: z.date({
    required_error: "Please select a date and time",
  }),
  url: z.string().min(1, {
    message: "url is required",
  }),
});
type FormFields = z.infer<typeof bannerSchema>;

const BannerSetting = ({ closeBanner }: BannerProps) => {
  const [data, setData] = useState<FormFields>({
    title: "",
    description: "",
    dateAndTime: new Date(),
    url: ""
  });
  // const [error, setError] = useState<FormFields | {}>({});

  const handleSubmit = async(e: React.FormEvent) =>{
    e.preventDefault();

    // setError({title: "", description: "", dateAndTime: "", url: ""});
    try{
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/postBannerData`, {
        method: "POST",
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          dateAndTime: data.dateAndTime,
          url: data.url
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      window.location.reload();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="absolute h-screen w-screen bg-black/70 backdrop:blur-lg z-40"></div>
      <div className="w-7/12 h-[60%] bg-blue-400 border-2 border-gray-100 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-auto">
        <h3 className="text-2xl text-center font-semibold mt-10">
          Make your banner
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="m-4 grid grid-cols-2 place-content-center place-items-center px-8 gap-y-4">
            <div className="">
              <p className="text-lg">Title:</p>
              <input
                type="text"
                onChange={(e)=>setData(values => ({...values, title: e.target.value}))}
                className="rounded-lg w-56 border-[1px] pl-2"
                placeholder="eg. Course Launching in"
              />
            </div>
            <div className="">
              <p className="text-lg">Date & time</p>
              <DatePicker
                showIcon
                selected={data.dateAndTime}
                //@ts-ignore
                onChange={(date)=>setData(values => ({...values, dateAndTime: date}))}
                showTimeSelect
                dateFormat="Pp"
                className="rounded-md border-2 border-sky-400/40"
              />
            </div>
            <div className="">
              <p className="text-lg">Description:</p>
              <textarea
                onChange={(e)=>setData(values => ({...values, description: e.target.value}))}
                className="rounded-lg w-56 border-[1px] pl-2"
                placeholder="eg. MERN stack course"
              />
            </div>
            <div className="">
              <p className="text-lg">Website or Social Media:</p>
              <input
                onChange={(e)=>setData(values => ({...values, url: e.target.value}))}
                type="text"
                className="rounded-lg w-56 border-[1px] pl-2"
                placeholder="eg. mernstack.com"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-green-500 p-1 rounded-md px-2 border-[1px] border-b-2 border-r-2 border-black">
              Make Banner
            </button>
          </div>
        </form>

        <div className="absolute top-4 right-4 flex justify-center items-center border-2 border-[#606060] rounded-md cursor-pointer">
          <X onClick={closeBanner} className="h-4 w-4" />
        </div>
      </div>
    </>
  );
};

export default BannerSetting;
