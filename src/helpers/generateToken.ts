import jwt from "jsonwebtoken";

/**
 * @function tokenSing - Genera el token
 * @param id dato de tipo number
 * @param username dato de tipo string
 * @returns Retorna el token con expiracion de una hora
 */
type IdPayload = { id: number; username: string };
export const tokenSing = ({ id, username }: IdPayload) => {
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

/**
 * @function verifyToken - Verifica el token por medio del metodo verifyToken de jwt.
 * @param token -Este el el token de autentificacion.
 * @returns - Retonar la verificacion del toquen o un error.
 * @throws lanza error si la verificacion del token es erronea.
 */
export const verifyToken = async (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};