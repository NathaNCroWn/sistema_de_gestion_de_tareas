import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * @function validationResult - Valida los resultados de la validacion de las solicitudes
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @param {NextFunction} next 
 * @returns Promesa que se resulve cuando ocurre un error.
 * @throws Lanza error cuando la validacion es erronea.
 */
export const validationResults = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};