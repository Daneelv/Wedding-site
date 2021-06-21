import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import style from "../styles/Footer.module.css";
if (typeof window !== "undefined") {
  const M = window;
  require("materialize-css");
}

const Footer = () => {

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);



const ImportantInfo = (e) => {
  e.preventDefault();
  const btnClick = document.querySelector(".clickMe"); 
  btnClick.click();
}


  return (
    <section id="footer" className= {style.sect}>
        <div className="row">
        <div className="col s12"  style ={{paddingBottom: "40px"}}>
          <a href="" onClick = {(e)=>{ImportantInfo(e)}}>Belangrikke Inligting</a>
          </div>
          <div className="col s12">
            <p>Website Designed by <a href="https://www.linkedin.com/in/daneel-v-13136051/" target="_blank"> The Groom </a> | Copyright ©️ {new Date().getFullYear()} </p>
          </div>
        </div>
    </section>
  );
};

export default Footer;
