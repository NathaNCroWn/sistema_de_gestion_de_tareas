import { Router } from "express";
import { validationResults } from "../helpers/validateHelper";
import { body } from "express-validator";
import {
  deleteUser,
  getUsers,
  postUser,
  postUserLog,
} from "../controllers/UserControllers";

const routerUser = Router();

routerUser.get("/user", getUsers);
routerUser.post(
  "/register",
  body("username").notEmpty().exists().withMessage("el nombre es obligarotio"),
  body("password")
    .notEmpty()
    .exists()
    .withMessage("la contraseña es obligarotio"),
  validationResults,
  postUser
);
routerUser.delete("/user/:id", deleteUser);
routerUser.post("/login", postUserLog);

export default routerUser;
