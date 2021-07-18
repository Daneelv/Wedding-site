import React, { useEffect } from "react";
import navStyles from "../styles/Nav.module.css";
import "materialize-css/dist/css/materialize.min.css";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}



const Nav = ({personName}) => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, { edge: "left" });
  }, []);

  return (
    <>
      <div className="navbar-fixed">
        <nav className={navStyles.navbar}>
          <div className="nav-wrapper">
            <a
              href="#"
              data-target="mobile-nav"
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>
            <a href="#" className="logo">
            <h5 className={navStyles.inits}>Daneel</h5>{" "}
              <i className={`material-icons tiny ${navStyles.logo}`} >
                favorite
              </i>{" "}
               <h5 className={navStyles.inits}>Maryke</h5>
            </a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* <li>
                <a href="#banner">Tuis</a>
              </li> */}
              <li>
                <a href="#about">Ons Storie</a>
              </li>
              <li>
                <a href="#gallery">Fotos</a>
              </li>
              {/* <li>
                <a href="#invitedPers">{personName}</a>
              </li> */}
              <li>
                <a href="#venue">Details</a>
              </li>
              <li className={navStyles.btnRsvp}>
                <a href="#rsvp">RSVP</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav sidenav-close" id="mobile-nav" >
        {/* <li>
          <a href="#banner">Tuis</a>
        </li> */}
        <li>
          <a href="#about">Ons Storie</a>
        </li>
        <li>
          <a href="#gallery">Fotos</a>
        </li>
        {/* <li>
          <a href="#invitedPers">{personName}</a>
        </li> */}
        <li>
          <a href="#venue">Details</a>
        </li>
        <li>
          <a href="#rsvp" className="">
            RSVP
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;

Nav.defaultProps = {
  personName: "Jou Hoekie"
};