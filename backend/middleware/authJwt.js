import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.send(`Not authorised`);
    }

    jwt.verify(token, "chitterSecret", (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: `Unauthorised` });
        }
        req.userId = decoded.id;
        next();
    })

}