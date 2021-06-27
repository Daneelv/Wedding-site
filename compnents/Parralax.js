import React, { useEffect} from "react";
import "materialize-css/dist/css/materialize.min.css";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}
const Parralax = (parraProps) => {
  const { image } = parraProps.parralax;

  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, {});
  }, []);
  return (
    <div className="parallax-container hide-on-small-only"  style={{height: "65vh", zIndex: 1}} >
      <div className="parallax">
        <img src={image} className="responsive-img" ></img>
      </div>
    </div>
  );
};

export default Parralax;
