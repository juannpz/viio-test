# Levantar el servidor y conectarse a una base de datos local

Primero, necesitas configurar las variables de entorno. Crea un archivo `.env` en la raíz de tu proyecto y añade las siguientes líneas:

```env
DB_USER=usuarioLocalPostgress
DB_PASSWORD=contraseñaLocalPostgress
DB_HOST=localhost
DB_NAME=nombreDeLaBaseLocal
SECRET_KEY=randomKey
```

---

# Levantar el servidor y conectarse a la base de datos generada en Docker

Para conectarte a la base de datos generada en Docker, modifica el archivo `.env` con las siguientes líneas:

```env
DB_USER=admin
DB_PASSWORD=admin
DB_HOST=db
DB_NAME=viio
SECRET_KEY=randomKey
```
