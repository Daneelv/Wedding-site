const db = require('../../lib/databaseConn').instance;
const conf = require('../../lib/config');

//eg http://localhost:3000/api/get_user?UID=DVT_01
export default async (req, res) => {
  try {
    if (req.method != 'GET' && !req.query.UID) {
      conf.redirect404(res);
    }

    const { query: { UID } } = req;
    const post = await db.one('select * from wedding.guests where url_param_id = $1', [UID]);

    res.status(200).json(post);
  } catch (e) {

    console.log(conf.env);
    console.error(e);
    conf.redirect404(res);
  }

};
