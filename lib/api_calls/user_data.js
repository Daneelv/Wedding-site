const db = require("../databaseConn").instance;
var cors = require('cors')

//eg http://localhost:3000/api/get_user?UID=DVT_01
const getUserInfo = async ( req, res) => {
  try {
    res.setheader("Access-Control-Allow-Origin", "*");
    res.setheader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setheader("Access-Control-Allow-Methods", "GET");

    if (req.method != "GET" && !req.query.UID) {
      res.status(404);
    }
    const {
      query: { UID },
    } = req;

    const post = await db.one(
      "select * from wedding.guests where url_param_id = $1",
      [UID]
    ); 
    res.status(200).json(post);
  } catch (e) {
    res.status(404).json(e);
    console.log(e);
  }
};

/*
http://localhost:3000/api/post_user_rsvp?UID=DVT_01

{
  "attending": true,
  "guest_comment":"I dont eat fish"
}

*/
const postUserRsvp = async (req, res) => {
  try {
    res.setheader("Access-Control-Allow-Origin", "*");
    res.setheader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.setheader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      res.status(200).json({});
    }


    if (req.method != "POST" && !req.query.UID) {
      console.log("Something went wrong");
      res.status(400).json("Something Went wrong");
    }
    var now = new Date();
    const {
      query: { UID },
      body: { attending, guest_comment },
    } = req;




    const post = await db.result(
      "update wedding.guests set attending = $1, guest_comment = $2, rsvp_date = $3 where url_param_id = $4",
      [attending, guest_comment, now, UID]
    );


    res.status(200).json(post.rowCount);
  } catch (e) {
    res.status(400).json(e);
    console.log(e);
  }
};

const postUserPopupConfirm = async(req, res) => {
  try {
    if (req.method != "POST" && !req.query.UID) {
      console.log("Something went wrong");
      res.status(400).json("Something Went wrong");
    }

    const {
      query: { UID },
    } = req;


    req.setHeader('Content-Type', 'application/json');
    req.setHeader('Access-Control-Allow-Origin', 'no-cors');
    req.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    req.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    req.setHeader('Access-Control-Allow-Credentials', true);

    const post = await db.result(
      "update wedding.guests set infopopupaccept = true where url_param_id = $1",
      [UID]
    );


    res.status(200).json(post.rowCount);
  } catch (e) {
    console.log(e)
    res.status(400).json(e);
  }
}

export { getUserInfo, postUserRsvp, postUserPopupConfirm};
