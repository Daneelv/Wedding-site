import React from "react";

import {getStringDate, getStringTime} from "../helpers/dateTime"
import Venue from "../styles/Venue.module.css";


const venue = ({ image, StringWeddingDate, StringWeddingTime , sectWeddingInfo, IsFamilyMember }) => {
  
  const {directionsURL, directionsString, Accomodation, FamilyBraai } = sectWeddingInfo;
  
  const style = {
    backImage: {
      background: `url("${image}") left top / cover no-repeat`,
      height: "100vh",
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
              <li>Datum: {StringWeddingDate} </li>
              <li>Tyd: {StringWeddingTime}</li>
              <li>Plek: <a href={directionsURL} target="_blank">{directionsString}</a> </li>
            </ul>
          <hr className="style"/>

          <h5>Akkommodasie</h5>
          <p className="left-align">
              {Accomodation.Description}
          </p>
           <h5>Kontak Nommer:</h5>
           <ul className = {Venue.contact}>
              <li> <i className={"material-icons center"} >phone</i> <a href={`tel:${Accomodation.telNo}`}>{Accomodation.telNo}</a> </li>
              <li> <i className={"material-icons center"} >phone_iphone</i> <a href={`tel:${Accomodation.celNo}`}>{Accomodation.celNo}</a></li>
            </ul>
          <hr className="style"/>

          {IsFamilyMember && 
          (  
            <>
            <h5>Familie Braai</h5>
            <p className="left-align">
                {FamilyBraai.Description}
            </p>
            <ul>
                <li>Datum: {getStringDate(FamilyBraai.braaiDate)} </li>
                <li>Tyd: {getStringTime(FamilyBraai.braaiDate)}</li>
                <li>Plek: <a href={directionsURL} target="_blank">{directionsString}</a> </li>
              </ul>
            <hr className="style"/>
            </>
          )}

        </div> 
        <div className="col s12 m9 " style={style.backImage}>
        </div>
      </div>
    </section>
  );
};

export default venue;

venue.defaultProps = {
  image: "/Detail.jpg",
  StringWeddingDate: "18 December 2021",
  StringWeddingDay: "Saterdag ",
  StringWeddingTime: "16:00"
};
