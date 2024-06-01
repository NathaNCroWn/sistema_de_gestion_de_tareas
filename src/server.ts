import express from "express";
import Taskrouter from "./routes/taskRoutes";
import Userrouter from "./routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();
const server = express();

server.use(express.json());
server.use("/api", Taskrouter,Userrouter);
export default server;
