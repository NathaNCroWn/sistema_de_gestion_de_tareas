import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/generateToken";
import User from "../models/User";

/**
 *Crear un tipo de dato en en la interface de Request  de express
 */
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

/**
 * @function checkAuth - validad la autentificacion de ususario.
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @param {NextFunction} next
 * @returns Promesa que se resulve cuando ocurre un error.
 * @throws Lanza error si el token no es valido o es un usuario no autorizado
 */
export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    return res.status(401).json({ mensaje: "No Autorizado" });
  }
  const token = bearer.split(" ")[1];
  try {
    const tokenData = await verifyToken(token);

    if (typeof tokenData === "object" && tokenData.id) {
      const user = await User.findByPk(tokenData.id, {
        attributes: ["id", "username"],
      });
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ mensaje: "Token no valido" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
