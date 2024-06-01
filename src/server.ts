import express from "express";
import Taskrouter from "./routes/taskRoutes";
import Userrouter from "./routes/userRoutes";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express"
import swaggerSetup from "./docs/swagger"

dotenv.config();
const server = express();

server.use(express.json());
server.use("/api", Taskrouter,Userrouter);

//documentacion
server.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup))
export default server;
