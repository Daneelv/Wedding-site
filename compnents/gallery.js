import React, { useEffect, useState } from "react";

import style from "../styles/Gallery.module.css"

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const gallery = (galleryData) => {
  const [galleryItems, setgalleryItems] = useState(galleryData.galleryData);

  useEffect(() => {
    const elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems, {});
  }, []);

  return (
    <section id="gallery" className={style.sect} >
      <div className="row">
        {galleryItems.map((galImg) => (
          <div className="col s6 m4 l4" key={galImg.id}>
            <img
              src={galImg.url}
              className="materialboxed responsive-img card"
            ></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default gallery;





