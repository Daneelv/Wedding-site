import React, { useEffect, useState, useRef } from "react";
import "materialize-css/dist/css/materialize.min.css";
import ModalYN from "./modalYesNo.js";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const rsvp = (props) => {
  const {
    attending,
    guest_comment,
    name,
    rsvp_date,
    url_param_id,
  } = props.userData;

  const rsvpRef = useRef();
  const [RSVPValue, setRSVPValue] = useState(
    rsvp_date == null ? "" : attending
  );
  const [Comment, setComment] = useState(guest_comment);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
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
    // console.log(e.target.value);
    setRSVPValue(val);
    setshowModal(val != "");
  }

  return (
    <section id="rsvp">
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
            <ModalYN
              UserID={url_param_id}
              RSVPValue={RSVPValue}
              Comment={Comment}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default rsvp;
