const db = require('../databaseConn').instance;
const conf = require('../config');

//eg http://localhost:3000/api/get_site_data
const getSiteInfo = async function(areq, ares) {
    try {
      console.log('enter')
      if (areq.method != 'GET') {
        conf.redirect404(ares);
      }
      const post = await db.one('select * from wedding.site_info');
      ares.status(200).json(post);
    } catch (e) {
  
      console.log(conf.env);
      console.error(e);
      conf.redirect404(ares);
    }
}

export {
  getSiteInfo,

}; 

