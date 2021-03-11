const db = require('../../lib/databaseConn').instance;
const conf = require('../../lib/config');
/*
http://localhost:3000/api/post_user_rsvp?UID=DVT_01

{
  "attending": true,
  "guest_comment":"I dont eat fish"
}

*/
export default async (req, res) => {
  try {

    if (req.method != 'POST' && !req.query.UID) {
      conf.redirect404(res);
    }
    var now = new Date();
    const { query: { UID }, body:{attending, guest_comment} } = req;
    const post = await db.result('update wedding.guests set attending = $1, guest_comment = $2, rsvp_date = $3 where url_param_id = $4', 
      [attending, guest_comment, now,  UID]);
    console.log(post.rowcount);
    res.status(200).json(post.rowcount);
  } catch (e) {
    console.log(conf.env);
    console.error(e);
    conf.redirect404(res);
  }
};
