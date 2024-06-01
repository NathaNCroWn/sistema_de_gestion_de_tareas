import bcrypt from "bcrypt";

/**
 * @function encrypt - Encriptar las contraseñás.
 * @param password Es el dato que utlizaremos para encrptar con el metodo bcrypt.has.
 * @returns Nos retorna la contraseña encriptada.
 */
export const encrypt = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

/**
 * @function comp - Comparar la contraseña que se le envia con la contraseña que ya se encuentra encriptada.
 * @param password Esta es la contraseña sin encriptacion.
 * @param hashPassword Esta es la contraseña encriptada.
 * @returns -Retorna la comparacion de las contraseñas
 */
export const comp = async (password: string, hashPassword: string) => {
  const compa = await bcrypt.compare(password, hashPassword);
  return compa;
};
