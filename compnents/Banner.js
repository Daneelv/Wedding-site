import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import BannerItems from "./BannerItems.js";
import { useMediaQuery } from "react-responsive";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const Banner = (bannerData) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [banners, setbanner] = useState(bannerData.bannerData);

  const options = {
    indicators: false,
    height: isMobile ? 300 : 700,
    duration: 800,
    interval: 6000,
  };

  useEffect(() => {
    // setbanner(tmpData);
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, options);
  }, []);
  return (
    <>
      <section id="banner">
        <div className="slider">
          <ul className="slides">
            {banners.map((banner) => (
              <BannerItems
                ban={banner}
                key={banners.findIndex((x) => x.url === banner.url)}
              />
            ))}
            ;
          </ul>
        </div>
      </section>
    </>
  );
};

export default Banner;
