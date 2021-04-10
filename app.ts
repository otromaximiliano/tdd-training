import express from "express";
import cors from "cors";
import { auth } from "./auth";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", auth);

export default app