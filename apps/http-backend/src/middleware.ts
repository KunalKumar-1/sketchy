import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/shared-backend/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token, JWT_SECRET) as {userId: string};

    if(decoded) {
        req.userId = decoded.userId;
        next();
    } else {  
         res.status(401).json({
          message: "Unauthorized"
        });
    }
}