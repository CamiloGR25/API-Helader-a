# API-Heladeria

# CRERAR API:

- Iniciar el proyecto tipo nodeJS: npm init --yes (crea un package.json)

- Instalamos dependencias de expres: npm install express --save (crea la carpeta node_modules y package-lock)

- Instalar Nodemon (Dependencia local de desarrollo): npm install -D nodemon (Sirve para que se actualicen los cambios sin apagar el servidor)
  En package.json se agrega un nuevo elemento en la seccion script que es "dev": "nodemon src/index.js"(la ruta)

- Ejecución del servidor: npm run dev

- Instalar el componente mongoose para la conexion con MongoDB: npm install mongoose --save

- Crear variables de entorno para los datos de conexion (dotenv): npm install dotenv --save
  y crear un archivo .env con una variable llamada MONGODB_URI= la conexion de AmongoDB
