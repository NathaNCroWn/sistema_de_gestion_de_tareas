import express from "express";
import server from "./server";
import connectionDB from "./config/connection";

const appi = express();

//middlewares
appi.use(express.json());

//Puerto de conexion
const PORT = 3000;

//conexion base de datos.
connectionDB();

server.listen(PORT, () => {
  console.log(`Api corriendo en le puerto ${PORT}`);
});
