import { Request, Response } from "express";
import Task from "../models/Task";
import User from "../models/User";

/**
 * @function getTasks - Consulta de todas la tareas mediante el metodo findAll.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando la consulta es exitosa o ocurre un error.
 * @throws Lanzara un error si la consulta es erronea.
 */
export const getTasks = async (req: Request, res: Response) => {
  try {
    const task = await Task.findAll();
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "hubo un error" });
  }
};

/**
 * @function postTask - Crear las tareas mediante el metodo create.
 * @param {Request} req Los parametros de solicitud que contiene los datos
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando se crea la tarea o ocurre un error.
 * @throws Lanzara un error si la creacion de la tarea es erronea.
 */
export const postTask = async (req: Request, res: Response) => {
  try {
    const  id  = req.user.id;
    const userId = req.body.userId;
    if (userId === id) {
      Task.create(req.body);
      return res.status(201).json({ mensaje: "Tarea Creada. " });
    }else{
        return res.status(401).json({ mensaje: "Usuario erroneo" })
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ mensaje: "hubo un error" });
  }
};

/**
 * @function updateTask - Actualiza las tareas mediante el metodo update.
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response}res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando se actualiza la tarea o ocurre un error.
 * @throws Lanzara un error si la consulta no encuentra el usuario o no encuentra la tarea
 * o ocurre un error.
 */
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const  iduse  = req.user.id;
    const user = req.body.userId;
    if(user === iduse){
        const userId = await User.findByPk(req.body.userId);
    if (!userId) {
      return res.status(404).json({ mensaje: "Usuario no existe" });
    }
    const task = await Task.findOne({ where: { id } });
    if (!task) {
      return res.status(404).json({ mensaje: "La tarea no existe" });
    }
    task.update(req.body);
    return res.status(200).json({ mensaje: "Tarea Actualizada. " });
    }else{
        return res.status(401).json({ mensaje: "Usuario erroneo" })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "hubo un error" });
  }
};

/**
 * @function deleteTask elimina la tarea por medio de su id con el metodo destroy.
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando se borrar la tarea o ocurre un error.
 * @throws Lanzara un error si la consulta es erronea.
 */
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { id },
    });
    return res.status(200).json({ mensaje: "tarea borrada" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "hubo un error" });
  }
};

/**
 * @function getTaskByUser - Realiza una busquda de las teareas por usuario
 * @param {Request} req Los parametros de solicitud que contiene los datos.
 * @param {Response} res Los parametros de respuesta utilizado como respuesta HTTP deseada.
 * @returns Promesa que se resulve cuando la consulta es exitosa o ocurre un error.
 * @throws Lanza error si no se encuntra el usuario o si se trata de acceder a las tareas de un
 * usuario con otro usuario.
 */
export const getTaskByUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idUser = parseInt(id);
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ mensaje: "Usuario no existe" });
    }
    const belongsToUser = idUser === req.user.id;
    if (!belongsToUser) {
      return res
        .status(401)
        .json({ mensaje: "Estas tareas no pertenecen a este ususario" });
    }
    const task = await Task.findAll({ where: { userId: req.user.id } });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "hubo un error" });
  }
};
