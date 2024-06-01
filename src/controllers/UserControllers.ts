import { Request, Response } from "express";
import { comp, encrypt } from "../helpers/encripSearch";
import { tokenSing } from "../helpers/generateToken";
import User from "../models/User";

/**
 * @function getUsers - Consulta todos los usuario en la base de datos User.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando la respuesta es exitosa o ocurre un error.
 * @throws Lanzara un error si la consulta es erronea.
 */
export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.findAll();
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "hubo un error" });
  }
};

/**
 * @function postUser crear un usuario o registrarlo con la contraseña encriptada
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando se crea un usuario o ocurre un error.
 * @throws Lanzara un error si la consulta es erronea.
 */
export const postUser = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const hashPassword = await encrypt(password);
    await User.create({ ...req.body, password: hashPassword });
    return res.status(201).json({ mensaje: "Usuario Creado." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ mensaje: "hubo un error", error: error });
  }
};

/**
 * @function deleteUser elimina un usuario por medio de su id con el metodo destroy.
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando el usuario se elimina o ocurre un error.
 * @throws Lanzara un error si la consulta es erronea.
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: { id },
    });
    return res.status(200).json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "hubo un error" });
  }
};

/**
 *@function postUserLog - Logea los usuarios existente.
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando la respuesta es exitosa o ocurre un error.
 * @throws Lanza error si el usuario no existe o la contraseña no es valida o ocurrio un error.
 */
export const postUserLog = async (req: Request, res: Response) => {
  try {
    const { password, username } = req.body;
    const user = await User.findOne({
      where: { username },
    });
    if (!user) {
      return res.status(404).json({ error: "El ususario no existe" });
    }
    const checkPassword = await comp(password, user.get("password"));
    if (!checkPassword) {
      return res.status(409).send({ error: "La contraseña no es valida" });
    }
    const token = tokenSing({
      id: user.get("id"),
      username: user.get("username"),
    });
    res.send(token);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "hubo un error" });
  }
};
