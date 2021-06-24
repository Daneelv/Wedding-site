const db = require('../databaseConn').instance;
const conf = require('../config');
var cors = require('cors')


//eg http://localhost:3000/api/get_site_data
const getSiteInfo = async function(req, res) {
    try {
      if (req.method != 'GET') {
        conf.redirect404(ares);
      }
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);

      const post = await db.one('select * from wedding.site_info');

      res.status(200).json(post);
    } catch (e) {
      conf.redirect404(res);
    }
}

export {
  getSiteInfo,
}; 

