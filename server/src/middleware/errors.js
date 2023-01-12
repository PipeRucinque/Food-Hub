const winston = require('winston')

module.exports = (err, req, res, next) => {
    winston.error(err.message, err);

    res.status(500).send('Error 500, server/middleware/errors.js')
}