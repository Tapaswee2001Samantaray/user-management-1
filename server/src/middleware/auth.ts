/* import { Request, Response, NextFunction } from "express";
import { verify, Secret } from "jsonwebtoken";

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearerHeaderToken = req.header("Authorization");
        if (!bearerHeaderToken) {
            return res.status(403).send({ status: false, msg: "Access Denied." });
        }
// console.log(bearerHeaderToken)

        const bearer = bearerHeaderToken.split(" ");
        const token = bearer[1];

        console.log(token)
        verify(token, process.env.JWT_SECRET_TOKEN as Secret, function (err, decodedToken: any) {
            console.log(decodedToken)
            if (err) {
                if (err.name === 'JsonWebTokenError') {
                    return res.status(401).send({ status: false, message: "invalid token" });
                }
            } else {
                req.token = decodedToken.userId;
                next();
            }
        });
    } catch (error: any) {
        res.status(500).send({ status: 'Fail', error: error.message });
    }
} */

export{}