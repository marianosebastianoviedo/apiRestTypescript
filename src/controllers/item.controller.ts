import { Request, Response } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const response = await getCar(id);
        const data = response ? response : {error:'ITEM_NOT_FOUND'};
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};
const getItems = async (req:Request,res:Response)=>{
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};
const updateItem = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};
const postItem = async (req:Request,res:Response)=>{
    try {
        const responseItem = await insertCar(req.body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM',e);
    }
};
const deleteItem = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const response = await deleteCar(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

export {getItem, getItems, updateItem, postItem, deleteItem}