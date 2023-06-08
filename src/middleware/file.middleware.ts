import { Request } from "express";
import multer, { diskStorage } from "multer";
import { renameSync, readdirSync } from "fs";

const PATH_STORAGE = `${process.cwd()}/assets`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const addNumber = readdirSync(`${process.cwd()}/assets`).length;
    readdirSync(`${process.cwd()}/assets`).filter((oldFile)=>{
      if (oldFile === 'publi_portal_cautivo.jpg') {
        renameSync(
          `${process.cwd()}/assets/publi_portal_cautivo.jpg`,
          `${process.cwd()}/assets/publi_portal_cautivo${addNumber}.jpg`, 
          /* (error)=>{
            if(error) throw error;
            console.log('nombre cambiado');
          }*/) 
      }
    });
    const ext = file.originalname.split(".").pop();
    //const fileNameRandom = `image-${Date.now()}.${ext}`;
    const fileNameRandom = `publi_portal_cautivo.jpg`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;