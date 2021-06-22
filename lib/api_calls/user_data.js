const db = require("../databaseConn").instance;

//eg http://localhost:3000/api/get_user?UID=DVT_01
const getUserInfo = async (req, res) => {
  try {
    if (req.method != "GET" && !req.query.UID) {
      res.status(404);
    }
    const {
      query: { UID },
    } = req;

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization');
    res.status(200);
    const post = await db.one(
      "select * from wedding.guests where url_param_id = $1",
      [UID]
    );
 
    res.status(200).json(post);
  } catch (e) {
    res.status(404).json(e);
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
    if (req.method != "POST" && !req.query.UID) {
      console.log("Something went wrong");
      res.status(400).json("Something Went wrong");
    }
    var now = new Date();
    const {
      query: { UID },
      body: { attending, guest_comment },
    } = req;

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization');
    res.status(200);
    const post = await db.result(
      "update wedding.guests set attending = $1, guest_comment = $2, rsvp_date = $3 where url_param_id = $4",
      [attending, guest_comment, now, UID]
    );


    res.status(200).json(post.rowCount);
  } catch (e) {
    res.status(400).json(e);
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

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization');
    res.status(200);
    const post = await db.result(
      "update wedding.guests set infopopupaccept = true where url_param_id = $1",
      [UID]
    );


    res.status(200).json(post.rowCount);
  } catch (e) {
    res.status(400).json(e);
  }
}

export { getUserInfo, postUserRsvp, postUserPopupConfirm};
