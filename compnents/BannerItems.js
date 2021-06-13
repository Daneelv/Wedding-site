import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";

const BannerItems = (banner) => {
  const { position, url, tagline, slogan } = banner.ban;
  return (
    <li>
      <img
        style={{
          backgroundPosition: position ? position : "center center",
          boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 48%)",
        }}
        src={url}
      ></img>
      <div className="caption center-align">
        <h2>{tagline}</h2>
        <h4 className="light grey-text text-lighten-3">{slogan}</h4>
      </div>
    </li>
  );
};

export default BannerItems;
