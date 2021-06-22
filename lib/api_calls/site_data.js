const db = require('../databaseConn').instance;
const conf = require('../config');
import { API_URL } from "../../config/index";

//eg http://localhost:3000/api/get_site_data
const getSiteInfo = async function(areq, ares) {
    try {
      if (areq.method != 'GET') {
        conf.redirect404(ares);
      }
      const post = await db.one('select * from wedding.site_info');
      ares.setHeader('Content-Type', 'application/json');
      ares.setHeader('Access-Control-Allow-Origin', `'${API_URL}*'`);

      ares.status(200).json(post);
    } catch (e) {
      conf.redirect404(ares);
    }
}

export {
  getSiteInfo,
}; 

