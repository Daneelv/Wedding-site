import React, { useEffect, useState } from "react";
// import "materialize-css/dist/css/materialize.min.css";
import FontAwesome from "react-fontawesome";
import banStyles from "../styles/Banner.module.css";
// import BannerItems from "./BannerItems.js";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const Banner = ({ image, weddingDate }) => {
  const [timerDays, setTimerDays] = useState("");
  useEffect(() => {
    Countdown();
    // var elems = document.querySelectorAll(".slider");
    // M.Slider.init(elems, { indicators: false });
  }, [timerDays]);
  return (
    <section
      id="banner"
      className={banStyles.banner}
      style={{ background: `url(${image}) center center / cover no-repeat` }}
    >
      <div className="row">
        <div className="col s12">
          <h2>{timerDays}</h2>
          <h4>
            Slanghoek <i className="material-icons center">filter_vintage</i>{" "}
            Rawsonville
          </h4>
          <span className={banStyles.iconExpand}>
            <a href="#about">
              <i className="material-icons center">expand_more</i>
            </a>
          </span>
        </div>
      </div>
    </section>
  );

  function Countdown() {
    const countDownDate = new Date(weddingDate).getTime();

    // Update the count down every 1 second
    var x = setTimeout(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(distance);

      distance < 0
        ? setTimerDays("Die knoop is deurgehak !!")
        : setTimerDays(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  }
};

export default Banner;

Banner.defaultProps = {
  weddingDate: "Dec 18, 2021 16:00:00",
  image:
    "https://res.cloudinary.com/dwe0nwobf/image/upload/v1617218966/Troue%20main%20images/IMG_1499-min_vknazx.jpg",
};
