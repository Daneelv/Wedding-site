import React, { useEffect, useState, useRef } from "react";
import "materialize-css/dist/css/materialize.min.css";
import ModalYN from "./modalYesNo.js";
import ModalCal from "../compnents/modalCal";
import { API_URL } from "../config/index";
import ConfettiGenerator from "confetti-js";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const rsvp = ({ attending, guest_comment, name, rsvp_date, url_param_id }) => {
  const router = useRouter();
  const rsvpRef = useRef();
  const [RSVPValue, setRSVPValue] = useState(
    rsvp_date == null ? "" : attending.toString()
  );
  const [Comment, setComment] = useState(guest_comment);
  const [showModal, setshowModal] = useState(RSVPValue != "");
  const [rsvpPosted, setRsvpPosted] = useState(false);

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
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});

    var txtArea = document.querySelector("#comments");
    M.textareaAutoResize(txtArea);
    M.updateTextFields();
  }, []);

  function handleSubmit(e) {
    if (RSVPValue === "") {
      rsvpRef.current.focus();
      M.toast({
        html: "Kies asseblief n geldige RSVP opsie",
        classes: "rounded red",
      });
    }
    e.preventDefault();
  }

  function handleChange(e) {
    const val = e.target.value;
    setRSVPValue(val);
    setshowModal(val != "");
  }

  async function postUserData() {
    const confetti = new ConfettiGenerator(confettiSettings);
    const attending = RSVPValue === "true";
    const bod = {
      attending: RSVPValue,
      guest_comment: Comment,
    };

    setRsvpPosted(false);
    try {
      const res = await fetch(
        `${API_URL}/api/post_user_rsvp?UID=${url_param_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bod),
        }
      );
      const result = await res.json();

      if (!res.ok) {
        router.push("/page404");
        return res.status(404).json({ message: result });
      }

      if (attending) {
        confetti.render();
        setTimeout(() => {
          confetti.clear();
        }, 20000);
      }

      M.toast({
        html: "<h6>Dankie vir jou RSVP</h6>",
        classes: "rounded green",
        displayLength: 7000,
      });

      setTimeout(() => {
        M.toast({
          html: `<h6> ${
            attending ? "Sien jou daar!! 👰💒" : "Ons gaan jou mis 😢"
          }</h6>`,
          classes: "rounded green",
          displayLength: 5000,
        });

        attending && setRsvpPosted(true);
      }, 2000);
    } catch (e) {
      router.push("/page404");
      return e;
    }
  }

  return (
    <section id="rsvp">
      <canvas id="confetti-holder"> </canvas>
      <div className="container center-align">
        <h3>{name}</h3>
        <h5>Gebruik asseblief hierdie vorm om te RSVP</h5>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <select
                onChange={handleChange}
                defaultValue={RSVPValue}
                ref={rsvpRef}
              >
                <option value="">Kies n Opsie</option>
                <option value="false">
                  Ongelukkig kan ek dit nie maak nie
                </option>
                <option value="true">Ek is defnetief daar!!</option>
              </select>
              <label>Sien ons jou op ons groot dag?</label>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  value={Comment}
                  onChange={(event) => {
                    setComment(event.target.value);
                  }}
                  id="comments"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="comments">Enige versoeke of kommentaar</label>
              </div>
            </div>
            <button
              data-target="modalConfirmRSVP"
              className={showModal ? "btn modal-trigger" : "btn"}
            >
              RSVP
            </button>
          </form>
        </div>
        <ModalYN
          message={
            <>
              Is jy seker dat jy
              <strong>
                {RSVPValue === "true" ? " Gaan Bywoon" : " Nie Gaan Bywoon Nie"}
              </strong>
            </>
          }
          handleResult={() => {
            postUserData();
          }}
        />
        {rsvpPosted && <ModalCal />}
      </div>
    </section>
  );
};

export default rsvp;
