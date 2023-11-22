# Levantar el proyecto y conectarse a la base de datos generada en Docker

1- Crear un archivo `.env` en el directorio `/server` con el siguiente contenido:
```env
DB_USER=admin
DB_PASSWORD=admin
DB_HOST=db
DB_NAME=viio
JWT_SECRET_KEY=randomKey
PORT=3000
```

2- Instalar de forma manual las dependencias del servidor y del cliente ejecutando `npm install` en ambos directorios, `/client` y `/server`

3- Crear y levantar los contenedores docker ejecutando el comando en el directorio raíz del proyecto:
```bash
docker-compose up --build
```
