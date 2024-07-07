// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      next();
    }
  };
  