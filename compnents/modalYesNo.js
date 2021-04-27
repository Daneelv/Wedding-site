import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const modalYesNo = (props) => {
  const { RSVPValue, UserID, Comment } = props;
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  async function postUserData() {
    const bod = {
      attending: RSVPValue,
      guest_comment: Comment,
    };
    try {
      const res = await fetch(
        `http://localhost:3000/api/post_user_rsvp?UID=${UserID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bod),
        }
      );
      const result = await res.json();
      console.log(result);
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  const BtnClick = (e) => {
    const confirm = e.target.getAttribute("data-confirm") == "true";

    if (!confirm) {
      console.log("cancelled");
      return;
    }

    //Maak API Call en rekord Submission
    postUserData();
    e.preventDefault();
  };

  return (
    <div id="modalConfirmRSVP" className="modal">
      <div className="modal-content">
        <h4>Bevestiging</h4>
        <p>
          {" "}
          Is jy seker dat jy{" "}
          <strong>
            {RSVPValue == "true" ? " Gaan Bywoon" : " Nie gaan bywoon nie"}
          </strong>
        </p>
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

export default modalYesNo;
