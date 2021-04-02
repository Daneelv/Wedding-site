import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";

const BannerItems = (banner) => {
  const { position, url, tagline, slogan } = banner.ban;
  return (
    <li>
      <img
        style={{ backgroundPosition: position ? position : "center center" }}
        src={url}
      ></img>
      <div className="caption center-align">
        <h3>{tagline}</h3>
        <h5 className="light grey-text text-lighten-3">{slogan}</h5>
      </div>
    </li>
  );
};

export default BannerItems;
