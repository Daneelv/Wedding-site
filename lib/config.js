
const env = process.env.NODE_ENV || 'development';

const redirect404 = (res) => {
  res.writeHead(302, {
    'Location': '/404'
  });
  res.status(404).end();

}

module.exports = {
  redirect404,
  env
};

