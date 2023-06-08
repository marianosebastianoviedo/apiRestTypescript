import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExtended } from '../interfaces/requestExtended';

const checkJwt = (req:RequestExtended, res:Response, next:NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDA");
        } else {
            req.user = isUser as any;
            //console.log(jwtByUser);
            next();  
        }
    } catch (e) {
        res.status(400);
        res.send("SESSION_NO_VALIDA")
    }
}
export {checkJwt};