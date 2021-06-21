import React from "react";
import Venue from "../styles/Venue.module.css";

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
    <section id="venue" className= {Venue.venue}>
      <div className="row">
        <div className="col s12 m3 center-align">
          <h3>Details</h3>
          <hr className="style"/>
          <h5>Seremonie</h5>
            <ul>
              <li>Datum: Saterdag 18 December 2021</li>
              <li>Tyd: 15:00</li>
              <li>Plek: <a href="https://goo.gl/maps/6SRdWFvWwc9RFAgh7" target="_blank">Slanghoek Rawsonville</a> </li>
            </ul>
          <hr className="style"/>

          <h5>Akkommodasie</h5>
          <p className="left-align">
            Aliqua quis laboris laborum aliquip et eiusmod sit nisi amet. Quis
            quis adipisicing et deserunt duis incididunt sit. Fugiat nostrud
            incididunt culpa laboris ea laboris occaecat proident sunt eiusmod
            eu est cupidatat. Proident id incididunt cupidatat fugiat nostrud id
            est consequat duis cillum.
          </p>
           <h5>Kontak Nommer:</h5>
            <a href="tel:0726312089">0726312089</a>
          <hr className="style"/>

          <h5>Familie Braai</h5>
          <p className="left-align">
            

          </p>
          <ul>
              <li>Datum: Vrydag 17 December 2021</li>
              <li>Tyd: 16:00</li>
              <li>Plek: <a href="https://goo.gl/maps/6SRdWFvWwc9RFAgh7" target="_blank">Slanghoek Rawsonville</a></li>
            </ul>
          <hr className="style"/>



        </div>
        
        <div className="col s12 m9 " style={style.backImage}>
        </div>
      </div>
    </section>
  );
};

export default venue;

venue.defaultProps = {
  image: "./images/Detail.jpg",
};
