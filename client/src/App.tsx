import { useEffect, useState } from "react";
import "./App.css";
import AddBannerCard from "./components/Banner/AddBannerCard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BannerSetting from "./components/Banner/BannerSetting";
import BannerCard from "./components/Banner/BannerCard";

interface BannerData {
  bannerId: string;
  title: string;
  description: string;
  dateAndTime: Date;
  url: string;
}

function App() {
  const [isBannerSettingsOpen, setIsBannerSettingsOpen] = useState(false);
  const [bannerData, setBannerData] = useState<BannerData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/getBannerData`
      );
      const data = await response.json();
      setBannerData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className="h-screen w-screen overflow-x-hidden">
        {isBannerSettingsOpen && (
          <BannerSetting closeBanner={() => setIsBannerSettingsOpen(false)} />
        )}
        <Header />
        <div className="flex bg-slate-50">
          <Sidebar />
          <div className="m-6">
            <h2 className="text-xl -mt-2 mb-2">Your Banners</h2>
            <div
              className="grid lg:grid-cols-3 grid-cols-2 gap-4"
              onClick={() => setIsBannerSettingsOpen(true)}
            >
              <AddBannerCard />
              {bannerData?.map((banner) => {
                return (
                  <BannerCard
                    key={banner.bannerId}
                    title={banner.title}
                    description={banner.description}
                    dateAndTime={banner.dateAndTime}
                    url={banner.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
