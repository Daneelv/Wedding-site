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
  const [confettiRender, setconfettiRender] = useState(false);
 
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
    start_from_edge: true,
    respawn: false,
  };

  useEffect(() => {
    let elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});

    let txtArea = document.querySelector("#comments");
    M.textareaAutoResize(txtArea);
    M.updateTextFields();
  }, []);

  function handleSubmit(e) {
    if (RSVPValue === "") {
      rsvpRef.current.focus();
      M.toast({
        html: "Kies asseblief n geldige RSVP opsie",
        classes: "rounded toast",
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
    const confettiElement = document.getElementById("confetti-holder");
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
        router.push("/404");
        return res.status(404).json({ message: result });
      }

      if (attending) {
        setconfettiRender(true);
        confettiElement.style.display = "inline-block";
        confetti.render();
        setTimeout(() => {
          confetti.clear();
          confettiElement.style.display = "none";
          setconfettiRender(false);
        }, 20000);
      }

      M.toast({
        html: "<p>Dankie vir jou RSVP</p>",
        classes: "rounded toast",
        displayLength: 7000,
      });

      setTimeout(() => {
        M.toast({
          html: `<p> ${
            attending ? "Sien jou daar!! 👰💒" : "Ons gaan jou mis 😢"
          }</p>`,
          classes: "rounded toast",
          displayLength: 5000,
        });

        attending && setRsvpPosted(true);
      }, 2000);
    } catch (e) {
      router.push("/404");
      console.log(e)
      return e;
    }
  }

  return (
    <section id="rsvp"  style = {{margin: "45px 0 45px 0"}}>
      <canvas id="confetti-holder"> </canvas>
      <div className="container center-align">
        <h3>{name}</h3>
        <h5 style={{paddingBottom: "20px"}}>Gebruik asseblief hierdie vorm om te RSVP</h5>
        <div className="row">
          <form className="col s12 m8 offset-m2" onSubmit={handleSubmit}>
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
                <option value="true">Ek is definitief daar!!</option>
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
              className={showModal && !confettiRender ? "btn modal-trigger" : "btn"}
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
