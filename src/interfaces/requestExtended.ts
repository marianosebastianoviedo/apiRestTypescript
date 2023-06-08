import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface RequestExtended extends Request {
  user?: JwtPayload | { id: string };
}