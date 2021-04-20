import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import ModalYN from "./modalYesNo.js"

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}
const rsvp = () => {
  const [showConfirm, setshowConfirm] = useState(false);



  const style = {
    iframe: {
      height: "60vh",
      width: "100vw",
    },
  };

  useEffect(() => {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }, []);


  function handleSubmit(event) {
    setshowConfirm(true);
    event.preventDefault();
  }

  return (
    <section id="rsvp">
      <div className="container center-align">
        <h3>RSVP</h3>
        <h5>Kom deel hierdie spesiale dag saam met ons</h5> 
          <div className="row">


    <form className="col s12" onSubmit={handleSubmit}>
  <div className="input-field col s12">
    <select classname="validate" >
      <option value="" disabled selected>Kies n opsie</option>
      <option value="1">Ongelukkig kan ek dit nie maak nie</option>
      <option value="2">Ek is daar !!</option>
    </select>
    <label>Sien ons jou op ons groot dag?</label>
  </div>

      <div className="row">
        <div className="input-field col s12">
          <textarea id="comments" className="materialize-textarea" data-length="120" classname="validate"></textarea>
          <label for="comments">Enige versoeke of kommentaar</label>
        </div>
      </div>
      <button data-target="modalConfirmRSVP" class="btn modal-trigger">RSVP</button>
    </form>
    <ModalYN />
  </div>
        
      </div>
    </section>
  );
};

export default rsvp;
