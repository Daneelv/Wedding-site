import React from "react";

const InvitedPerson = () => {
  const style = {
    person: {
      height: "300px",
      width: "auto",
      maxWidth: "100%",
      maxHeight: "auto",
    },
    butn: {
      width: "50%",
    },
    centreAlign: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "240px",
    },
    sect: {
      padding: "90px 0 60px 0",
    },
  };

  return (
    <section id="invitedPers" className="brown lighten-5" style={style.sect}>
      <div className="container center-align">
        <div className="row">
          <div className="col s12 m6 l6">
            <img
              style={style.person}
              className=""
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg"
            ></img>
          </div>
          <div className="col m6 s12 l6">
            <div className="row">
              <div className="col m12 s12 l12" style={style.centreAlign}>
                <div className="row">
                  <div className="col m12 s12 l12 ">
                    <h3>Pietie</h3>
                  </div>
                  <div className="col m12 s12 l12 ">
                    <p className="left-align">
                      Aliqua enim labore asdasd adasdasd asdasdasd asdasdasd
                      asdasda enim adipisicing exercitation commodo deserunt
                      labore veniam ad laboris in officia officia. Occaecat qui
                      ullamco magna quis esse nisi officia dolor. Eiusmod
                      officia elit quis ullamco ex nulla ut voluptate laborum et
                      cillum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col m12 s12 l12 ">
                <a
                  style={style.butn}
                  className=" left-align waves-effect waves-light btn-large btn-flat deep-orange lighten-3"
                  href="#rsvp"
                >
                  <strong>
                    <i className="material-icons left">wc</i>RSVP
                  </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitedPerson;
