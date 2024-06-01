import { Router } from "express";
import { validationResults } from "../helpers/validateHelper";
import { checkAuth } from "../middleware/auth";
import { body } from "express-validator";
import {
  deleteTask,
  getTasks,
  postTask,
  updateTask,
  getTaskByUser,
} from "../controllers/TaskControllers";

const routerTask = Router();

routerTask.get("/task", getTasks);
routerTask.get("/user/:id/task", checkAuth, getTaskByUser);
routerTask.post(
  "/task",
  checkAuth,
  body("title").notEmpty().withMessage("El titulo es obligarotio"),
  body("description").notEmpty().withMessage("La Descripcion es obligarotio"),
  body("expirationDate")
    .notEmpty()
    .withMessage("La fecha de expiracion es obligarotio"),
  body("state").notEmpty().withMessage("El estado es obligarotio"),
  validationResults,
  postTask
);
routerTask.put("/task/:id",checkAuth, updateTask);
routerTask.delete("/task/:id",checkAuth, deleteTask);

export default routerTask;
