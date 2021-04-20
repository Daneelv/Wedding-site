import React from "react";

const venue = () => {
  const style = {
    iframe: {
      height: "60vh",
      width: "100vw",
    },
  };

  return (
    <section id="venue">
      <div className="container center-align">
        <h3>Venue</h3>

        <a
          style={style.butn}
          className=" left-align waves-effect waves-light btn-large btn-flat deep-orange lighten-3"
          href="https://book.nightsbridge.com/10434"
          target="_blank"
        >
          <strong>
            <i className="material-icons left">airline_seat_individual_suite</i>
            Bespreek Slaapplek
          </strong>
        </a>
      </div>
    </section>
  );
};

export default venue;
