const siteInfo = require('../../lib/api_calls/site_data');

export default async (req, res) => siteInfo.getSiteInfo(req,res);