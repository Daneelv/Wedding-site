const siteInfo = require('../../lib/api_calls/user_data');
export default async (req, res) => siteInfo.getUserInfo(req,res);