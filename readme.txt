Crearemos un app de notas.

    Paso a paso.
    1. Creamos una carpeta.
    2. La inicializamos.
    3. Subimos la carpeta a un repositori github.
    4. Inicializamos con (npm)
    5. Instalamos los 2 paquetes (express y nodemon)
    6. Express sera una dependencia (npm i express).
        En este momento ya tenemos mas archivos en nuestra carpeta, los cuales son el paquete (json), los (node_modules) y el (paquete lock)
    7. Agregamos el (.gitignore) y agregamos la carpeta (node_modules), de esta manera esta carpeta la ignora a la hora de subir nuestro proyecto al repositorio.
    8. Ahora instalamos nodemon (npm i nodemon -D), pero queremos que sea en desarollo, entonces se agrega el (-D).
    9. Una vez instalamos los paquetes, agregamos unas instrucciones en nuestro archivo (json), en los scripts, agregamos un nuevo comando que se llama start y hacemos que se ejecute con node y el nombre de nuestro archivo ("start" : "node index.js").
    10. Repetimos el mismo proceso pero ahora crearemos un apartado para desarollo, en vez de start agregamos dev y le agregamos nodemos con el archivo que queremos abrir ("dev" : "nodemon index.js").