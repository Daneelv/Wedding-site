import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";

const BannerItems = (banner) => {
  const { id, url, tagline, slogan } = banner.ban;
  return (
    <li>
      <img src={url}></img>
      <div className="caption center-align">
        <h3>{tagline}</h3>
        <h5 className="light grey-text text-lighten-3">{slogan}</h5>
      </div>
    </li>
  );
};

export default BannerItems;
