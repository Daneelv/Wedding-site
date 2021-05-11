import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { API_URL } from "../config/index";
import ConfettiGenerator from "confetti-js";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const modalYesNo = ({ RSVPValue, UserID, Comment }) => {
  const confettiSettings = {
    target: "confetti-holder",
    max: "500",
    size: "1",
    animate: true,
    props: ["square"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: "30",
    rotate: true,
    width: "1920",
    height: "1067",
    start_from_edge: false,
    respawn: false,
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  async function postUserData() {
    const confetti = new ConfettiGenerator(confettiSettings);
    const bod = {
      attending: RSVPValue,
      guest_comment: Comment,
    };
    try {
      const res = await fetch(`${API_URL}/api/post_user_rsvp?UID=${UserID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bod),
      });
      const result = await res.json();

      if (res.ok) {
        if (RSVPValue) {
          confetti.render();
        }
        console.log(result);
        return result;
      } else {
        console.log("nee fok man");
      }
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
          Is jy seker dat jy
          <strong>
            {RSVPValue === true ? " Gaan Bywoon" : " Nie gaan bywoon nie"}
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
