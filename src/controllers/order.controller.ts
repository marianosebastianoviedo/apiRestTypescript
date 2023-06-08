import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExtended } from '../interfaces/requestExtended';

const getItems = async (req:RequestExtended,res:Response)=>{
    try {
        res.send({
            data:'ESTO SOLO LO VEN PERSONAS CON SESSION / JWT',
            user: req.user
        })

    } catch (e) {
        handleHttp(res, 'ERROR_GET_ORDER');
    }
};


export {getItems}