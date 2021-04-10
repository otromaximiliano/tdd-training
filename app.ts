import express from "express";
import cors from "cors";
import { auth } from "./auth";
const app: express.Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", auth);

app.listen(port, () => {
    console.log(`Server on port ${port}, link: http://localhost:${port}`);
});
