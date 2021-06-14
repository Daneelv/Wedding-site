import React from "react";

const venue = ({ image }) => {
  const style = {
    iframe: {
      height: "60vh",
      width: "100vw",
    },
    backImage: {
      background: `url("${image}") left top / cover no-repeat`,
      height: "80vh",
      marginBottom: "-20px",
      filter: "contrast(1.2)",
      backgroundAttachment: "fixed",
    },
  };
  return (
    <section id="venue">
      <div className="row">
        <div className="col s12 m3 center-align">
          <h3>Details</h3>
          <hr className="style"/>
          <h5>Venue</h5>
          <p className="left-align">
            Aliqua quis laboris laborum aliquip et eiusmod sit nisi amet. Quis
            quis adipisicing et deserunt duis incididunt sit. Fugiat nostrud
            incididunt culpa laboris ea laboris occaecat proident sunt eiusmod
            eu est cupidatat. Proident id incididunt cupidatat fugiat nostrud id
            est consequat duis cillum.
          </p>
          <hr className="style"/>
          <h5>Akkommodasie</h5>
          <p className="left-align">
            Aliqua quis laboris laborum aliquip et eiusmod sit nisi amet. Quis
            quis adipisicing et deserunt duis incididunt sit. Fugiat nostrud
            incididunt culpa laboris ea laboris occaecat proident sunt eiusmod
            eu est cupidatat. Proident id incididunt cupidatat fugiat nostrud id
            est consequat duis cillum.
          </p>
          <hr className="style"/>
        </div>
        
        <div className="col s12 m9 " style={style.backImage}>
          {/* <img style = {{marginBottom: "-25px"}} className="responsive-img" src={image}></img> */}
        </div>
      </div>
    </section>
  );
};

export default venue;

venue.defaultProps = {
  image: "./images/Detail.jpg",
};
