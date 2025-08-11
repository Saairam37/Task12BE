const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const auth = {
    isAuthenticated: (req, res, next) => {

        let token = req.cookie.token;
        if (!token) {
            res.status(401).json({ message: "No token provided" });
        }


        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Invalid token" });
            }

            req.userId = decoded.id;
            next();
        })
    }

}

module.exports = auth