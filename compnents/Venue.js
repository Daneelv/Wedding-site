import React from "react";

const venue = ({image}) => {
  const style = {
    iframe: {
      height: "60vh",
      width: "100vw",
    },
    backImage : {
      background: `url("${image}") left top / cover no-repeat`,
      height: "80vh",
      marginBottom: "-20px",
      filter: "contrast(1.2)",
      backgroundAttachment: "fixed"
    }



  };
  return (
    <section id="venue">
        <div className="row">
          <div className="col s12 m3 center-align">
            <h3>Details</h3>
            
            
            6-columns (one-half)
          </div>
          <div className="col s12 m9 " style = {style.backImage}>
            {/* <img style = {{marginBottom: "-25px"}} className="responsive-img" src={image}></img> */}
          </div>
        </div>      
    </section>
  );
};

export default venue;



venue.defaultProps = {
  image: "./images/Detail.jpg",
}