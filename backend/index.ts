import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import cors from "cors";
import routes from "./src/router/index";
import connectToDB from "./src/database/connection";

const PORT = process.env.PORT || 8080;

const app: Application = express();

connectToDB();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});