import React, {useEffect} from 'react'
import "materialize-css/dist/css/materialize.min.css";
if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const modalYesNo = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});

  }, []);

    return (
  <div id="modalConfirmRSVP" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
    )
}

export default modalYesNo
