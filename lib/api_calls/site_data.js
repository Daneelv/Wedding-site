const db = require('../databaseConn').instance;
const conf = require('../config');

//eg http://localhost:3000/api/get_site_data
const getSiteInfo = async function(areq, ares) {
    try {
      if (areq.method != 'GET') {
        conf.redirect404(ares);
      }
      ares.setHeader('Content-Type', 'application/json');
      ares.setHeader('Access-Control-Allow-Origin', '*');
      ares.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      ares.setHeader('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization');

      const post = await db.one('select * from wedding.site_info');

      ares.status(200).json(post);
    } catch (e) {
      conf.redirect404(ares);
    }
}

export {
  getSiteInfo,
}; 

