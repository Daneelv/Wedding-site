import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import BannerItems from "./BannerItems.js";
import { useMediaQuery } from "react-responsive";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const style = {
  banner: {
    height: "100vh !important",
    border: "solid",
    color: "red",
  },
};

const Banner = (bannerData) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [banners, setbanner] = useState(bannerData.bannerData);

  useEffect(() => {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, { indicators: false });
  }, []);
  return (
    <>
      <section id="banner">
        <div className="slider" style={style.banner}>
          <ul className="slides " style={style.banner}>
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

export default Banner_old;
