import React, { useEffect } from "react";
const { google, outlook, office365, yahoo, ics } = require("calendar-link");
import "materialize-css/dist/css/materialize.min.css";
if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const ModalCal = ({ heading, btnCaption }) => {
  const event = {
    title: "Daneel en Maryke Troue",
    location: "Slanghoek Mountain Resort, Rawsoneville",
    description: "",
    start: "2021-12-18 15:00:00",
    duration: [9, "hour"],
  };

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});

    const btnClick = document.querySelector(".ClickCal");
    setTimeout(() => {
      btnClick.click();
    }, 4000);
  }, []);

  return (
    <>
      <a
        className="ClickCal hide waves-effect waves-light btn modal-trigger"
        href="#modalCal"
      >
        Modal
      </a>
      <div id="modalCal" className="modal">
        <div className="modal-content">
          <h4>{heading}</h4>
          <div className="row"></div>
          <div className="col s12">
            <div className="row">
              <a
                href={google(event)}
                target="_blank"
                className="btn btn-large btn-flat"
              >
                Google
              </a>
            </div>
            <div className="row">
              <a
                href={outlook(event)}
                target="_blank"
                className="btn btn-large btn-flat"
              >
                Outlook
              </a>
            </div>
            <div className="row">
              <a
                href={office365(event)}
                target="_blank"
                className="btn btn-large btn-flat"
              >
                Office
              </a>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            {btnCaption}
          </a>
        </div>
      </div>
    </>
  );
};

ModalCal.defaultProps = {
  heading: <strong> Stoor datum in Kalender? </strong>,
  btnCaption: "Exit",
};

export default ModalCal;
