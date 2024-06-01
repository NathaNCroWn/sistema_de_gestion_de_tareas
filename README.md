# sistema_de_gestion_de_tareas

------------


##Instrucciones de uso local
1. Añadimos el repositorio de github de sistema_de_gestion de tareas a una carpeta.
1. Realizamos un git pull origin.
1. Nos dirigimos al archivo package.json e instalamos todas la dependencias
1. Ahora mediante la terminal usamos el comando npm run dev

------------



##Historial de commits Estos se pueden apreciar tanto en la rama de desarrollo como en la main.
![image](https://github.com/NathaNCroWn/sistema_de_gestion_de_tareas/assets/111405640/258d4c45-d446-466a-a1d8-a13907c40606)

------------



##Rutas de uso Local

###Usuario

- http://localhost:3000/api/register : Post :Nos permite registrar un usuario pasando { "username":"", "password":"" }

- http://localhost:3000/api/login : Post : Nos permite logear con el usuario resgistrado pasando { "username":"", "password":"" } este nos devuelve el token para utilizarlo en las demas rutas que lo necesitan

- http://localhost:3000/api/user : Get :Su uso es para la visualisacion de usuarios por si olvida la id.

- http://localhost:3000/api/user/1/task : Get :Se usa para ver las tareas de un usuario, despues del user/ pasamos el id del usuario que deseamos consultar, tenemos que tener el codigo de autentificacion e ingresarlo en bearer antes de realizar la consulta.

- http://localhost:3000/api/user/2 : Delete :nos permite borrar un usuario si lo necesitamos pasandole su id donde se encuentra el dos

###Tareas

- http://localhost:3000/api/task : Get : nos permite traer todas si las tareas si las necesitamos

- http://localhost:3000/api/task : Post : nose permite crear una tarea pero tenemos que pasarle el token de autontificacion y en userId pasar la id del usuario del recibimos el token de lo contrario nos dara usuario no autorizado { "title": "preba usuario uno", "description": "Documentacion", "expirationDate":"2024-12-31T00:00:00.000Z", "state": "Activa", "userId": 1 }

- http://localhost:3000/api/task/14 : Put : Nos permite editar una tarea pero tenemos que pasarle el token de autontificacion y en userId pasar la id del usuario del recibimos el token de lo contrario nos dara usuario no autorizado,el lugar del 14 es la id de la tarea

- http://localhost:3000/api/task/8 : Delete : Nos permite borrar una tarea pasandole la id donde se encuentra el 8

------------



##Rutas de uso en la nube
 ruta en la nube https://sistema-de-gestion-de-tareas.onrender.com/api/ para user con 
servicios como postman.
###Usuario
- https://sistema-de-gestion-de-tareas.onrender.com/api/user : Get : Su uso es para la visualisacion de usuarios por si olvida la id.
- https://sistema-de-gestion-de-tareas.onrender.com/api/user/1/task : Get :Se usa para ver las tareas de un usuario, despues del user/ pasamos el id del usuario que deseamos consultar, tenemos que tener el codigo de autentificacion e ingresarlo en bearer antes de realizar la consulta.
- https://sistema-de-gestion-de-tareas.onrender.com/api/register : Post :Nos permite registrar un usuario pasando { "username":"", "password":"" }
- https://sistema-de-gestion-de-tareas.onrender.com/api/login : Post : Nos permite logear con el usuario resgistrado pasando { "username":"", "password":"" } este nos devuelve el token para utilizarlo en las demas rutas que lo necesitan
- https://sistema-de-gestion-de-tareas.onrender.com/api/user/2 : Delete :nos permite borrar un usuario si lo necesitamos pasandole su id donde se encuentra el dos.
  
###Tareas
- https://sistema-de-gestion-de-tareas.onrender.com/api/task : Get : nos permite traer todas si las tareas si las necesitamos
- https://sistema-de-gestion-de-tareas.onrender.com/api/task  : Post : nose permite crear una tarea pero tenemos que pasarle el token de autontificacion y en userId pasar la id del usuario del recibimos el token de lo contrario nos dara usuario no autorizado { "title": "preba usuario uno", "description": "Documentacion", "expirationDate":"2024-12-31T00:00:00.000Z", "state": "Activa", "userId": 1 }
- https://sistema-de-gestion-de-tareas.onrender.com/api/task/14  Put : Nos permite editar una tarea pero tenemos que pasarle el token de autontificacion y en userId pasar la id del usuario del recibimos el token de lo contrario nos dara usuario no autorizado,el lugar del 14 es la id de la tarea
-https://sistema-de-gestion-de-tareas.onrender.com/api/task/8 :Delete : Nos permite borrar una tarea pasandole la id donde se encuentra el 8

