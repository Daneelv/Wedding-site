import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}
const modalYesNo = ({ heading, message, handleResult }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  const BtnClick = (e) => {
    const confirm = e.target.getAttribute("data-confirm") == "true";
    if (!confirm) {
      return;
    }
    e.preventDefault();
    //Callback
    handleResult();
  };

  return (
    <div id="modalConfirmRSVP" className="modal">
      <div className="modal-content">
        <h4>{heading}</h4>
        <p>{message}</p>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          data-confirm="false"
          onClick={(event) => BtnClick(event)}
          className="modal-close waves-effect waves-green btn-flat"
        >
          Nee
        </a>
        <a
          href="#!"
          data-confirm="true"
          onClick={(event) => BtnClick(event)}
          className="modal-close waves-effect waves-green btn-flat"
        >
          JA
        </a>
      </div>
    </div>
  );
};

modalYesNo.defaultProps = {
  heading: "Bevestiging",
};

export default modalYesNo;
