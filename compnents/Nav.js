import React, { useEffect } from "react";
// import Link from 'next/link';
import navStyles from "../styles/Nav.module.css";
import "materialize-css/dist/css/materialize.min.css";

if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const style = {
  Logo: {
    display: "inline",
    color: "red",
  },
  inits: {
    fontSize: "25px",
  },
};

const Nav = () => {
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
              <span style={style.inits}>Daneel</span>
              <i className="material-icons tiny" style={style.Logo}>
                favorite
              </i>
              <span style={style.inits}>Maryke</span>
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
              <li>
                <a href="#invitedPers">Jou hoekie</a>
              </li>
              <li>
                <a href="#venue">Die Venue</a>
              </li>
              <li className={navStyles.btnRsvp}>
                <a href="#rsvp">RSVP</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        {/* <li>
          <a href="#banner">Tuis</a>
        </li> */}
        <li>
          <a href="#about">Ons Storie</a>
        </li>
        <li>
          <a href="#gallery">Fotos</a>
        </li>
        <li>
          <a href="#invitedPers">Jou hoekie</a>
        </li>
        <li>
          <a href="#venue">Die Venue</a>
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
