import express from "express";

import dotenv from "dotenv";

dotenv.config();
const server = express();

server.use(express.json());
server.use("/api");
export default server;
