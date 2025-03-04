# Challenge en MERN 

En este repositorio encontraran un proyecto para la gestión de productos con precios especiales con el stack MERN (Mongo, Express, React y Node.js).


### ¿Cómo ejecutar el proyecto?

El proyecto está dividido en 2, la primera parte es la del backend que se encuentra en la carpeta back para iniciarlo debemos tener instalado nodejs y configurar la variable de entorno MONGO_DB_URI está la podemos agregar en el archivo .env en la carpeta back del proyecto luego nos paramos en esta carpeta y corremos los siguientes comandos:
> npm install

> npm run dev

Para la parte de front debemos configurar la variable de entorno VITE_API_URL que es la ruta del api que ya debe estar corriendo en un puerto luego de configurar la variable de entorno nos paramos en la carpeta front y corremos los siguientes comandos:
> npm install

> npm run dev

Con esto tendríamos los 2 servicios corriendo y funcionando correctamente.

### Elecciones Técnicas

Para el backend usé NodeJS con Express por la sencillez de configuración y la simplicidad que se necesitaba para el api, también lo usé con Typescript porque siento que ayuda mucho a la hora de detectar errores por el tema del tipado y a futuro si el proyecto crece sería mas fácil mantenerlo.
Para el frontend simplemente use React creando el proyecto con Vite ya que es el que mejor manejo. 

### Estructura del proyecto:
Para el back se usa una ruta que se encarga de registrar el usuario y en caso de encontrarlo previamente simplemente devuelve la información y con relación a los productos tenemos 2 métodos GET uno para obtener el listado completo de productos y otro para obtener los productos con el precio especial según el usuario que está haciendo la consulta y un método POST que se encarga de crear precios especiales para el usuario y producto seleccionado.
Para el front el proyecto inicia con una vista del login, donde el usuario ingresa los datos y luego se va a un menú con 2 opciones una de ver todos los artículos y si alguno de esos productos tiene precio especial para el usuario logueado muestra ese precio en vez del precio normal del producto y en la otra opción del menu es un formulario donde se escoge el producto al que se le quiere añadir el precio especial, se le establece el precio y se guarda para el usuario logueado.

### Notas finales:
El proyecto puede ser visto desplegado en el siguiente enlace: https://front-challenge-react.netlify.app/