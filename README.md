# Levantar el proyecto y conectarse a la base de datos generada en Docker

1- Crear un archivo `.env` en el directorio `/server` con las siguientes líneas:
```env
DB_USER=admin
DB_PASSWORD=admin
DB_HOST=db
DB_NAME=viio
SECRET_KEY=randomKey
```
2- Instalar de forma manual las dependencias del servidor y del cliente. Ejecutar el comando en ambos directorios, `/client` y `/server`
```bash
npm install
```
3- Crear y levantar los contenedores docker. Ejecutar el comando en el directorio raíz del proyecto:
```bash
docker-compose up --build
```
o bien ejecutar como superusuario en caso de ser necesario
```bash
sudo docker-compose up --build
```
