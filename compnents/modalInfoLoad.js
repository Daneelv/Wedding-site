import React, {useEffect} from 'react'
import "materialize-css/dist/css/materialize.min.css";
if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const ModalInfoLoad = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
    const btnClick = document.querySelector(".clickMe");
    setTimeout(() => {
   btnClick.click();  
    }, 1000);
  }, []);



    return (
      <>
      <a className="clickMe hide waves-effect waves-light btn modal-trigger" href="#ModalInfoLoad">Modal</a>
  <div id="ModalInfoLoad" className="modal">
    <div className="modal-content">
      <h4><strong>Belangrikke Inligting</strong></h4>

      <p>Die Afsluitingdatum vir RSVP'S is <strong> 2021-07-10 </strong>. </p>
      <p>As jy nie teen die afsluitings datum ge RSVP het nie, dan aanvaar ons dat jy nie die troue gaan bywoon nie. </p>
      <p>Maak asseblief seker van jou besluit voordat jy RSVP</p>
      <p>Indien jy nie kan RSVP nie weens n tegniese fout, skakel dan gerus vir Daneel of Maryke </p>
      <p>Hierdie uitnodiging is slegs vir jou bedoel. <strong>Ongelukkig word daar nie metgeselle toegelaat nie.</strong></p>
      
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ek Verstaan</a>
    </div>
  </div>
  </>
    )
}

export default ModalInfoLoad
