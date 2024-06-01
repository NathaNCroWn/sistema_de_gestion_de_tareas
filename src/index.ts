import express from "express";
import server from "./server";

const appi = express();

//middlewares
appi.use(express.json());

//Puerto de conexion
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Api corriendo en le puerto ${PORT}`);
});
