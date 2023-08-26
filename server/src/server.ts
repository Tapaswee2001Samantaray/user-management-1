import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/userRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});