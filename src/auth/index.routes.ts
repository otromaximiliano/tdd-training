import express from "express";
import { controller } from "./index.controllers";
export const auth: express.IRouter = express.Router();

auth.get("/", async (req, res) => {
    try {
        const response = await controller({ ...req.query });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});
