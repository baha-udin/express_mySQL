const logRequest = (req, res, next) =>  {
    console.log('Ada request ke Path: ', req.path);
    next()
  }

module.exports = logRequest