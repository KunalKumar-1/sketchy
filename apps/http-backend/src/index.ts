import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/shared-backend/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {
    
    const parseData = CreateUserSchema.safeParse(req.body);
    if(!parseData.success) {
        res.status(400).json({
            message: "Invalid data"
        })
        return;
    }

    //db call
    res.json({
        userId: "123"
    })
})

app.post("/signin", (req, res) => {

    const parseData = SigninSchema.safeParse(req.body);
    if(!parseData.success) {
        res.status(400).json({
            message: "Invalid inputs"
        })
        return;
    }
    //db call
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token        
    })
   
})

app.post("/room", middleware, (req, res) => {

    const parseData = CreateRoomSchema.safeParse(req.body);
    if(!parseData.success) {
        res.status(400).json({
            message: "Invalid inputs"
        })
        return;
    }
    //db call
    res.json({
        roomId: 123
    })
})

app.listen(3001);