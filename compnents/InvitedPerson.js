import React from "react";

const InvitedPerson = ({ message, image, name }) => {
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
    paragraph: {
      padding: "5px 5% 5px 15%",
    },
  };

  return (
    <section id="invitedPers" className="brown lighten-5" style={style.sect}>
      <div className="container center-align">
        <div className="row">
          <div className="col s12 m6 l6">
            <img style={style.person} className="" src={image}></img>
          </div>
          <div className="col m6 s12 l6">
            <div className="row">
              <div className="col m12 s12 l12" style={style.centreAlign}>
                <div className="row">
                  <div className="col m12 s12 l12 ">
                    <h3>Hallo {name}</h3>
                  </div>
                  <div className="col m12 s12 l12 ">
                    <p className="left-align" style={style.paragraph}>
                      {message}
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

InvitedPerson.defaultProps = {
  image: "./images/placeholder.png",
  message: `In nisi adipisicing tempor ex nulla duis exercitation proident occaecat consequat. 
    Quis nostrud ipsum eu nisi officia officia nostrud officia exercitation sunt eu officia. 
    Irure magna aliqua irure eu duis duis do incididunt qui voluptate cupidatat ut ullamco. 
    Magna dolor id voluptate minim. Reprehenderit voluptate tempor deserunt ullamco ullamco irure. Dolor minim eu magna sunt.`,
};

export default InvitedPerson;
