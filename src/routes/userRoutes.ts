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

/**
 * @swagger
 * /users:
 *   get:
      tags:
        - users
      summary: "listar ususarios"
      description: Este endpoint nos permite consultar todos los usuarios
      operationId: findPetsByStatus
      parameters:
        - name: status
          in: query
          description: Status values that need to be considered for filter
          required: false
          explode: true
          schema:
            type: string
            default: available
            enum:
              - available
              - pending
              - sold
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'          
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
        '400':
          description: Invalid status value
 */
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

/**
 * @openapi
 * /user/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     description: Elimina el usuario especificado por el ID proporcionado.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       400:
 *         description: Solicitud incorrecta (por ejemplo, ID no válido)
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
routerUser.delete("/user/:id", deleteUser);
routerUser.post("/login", postUserLog);

export default routerUser;
