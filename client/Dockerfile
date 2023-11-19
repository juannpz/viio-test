# Usar la última versión de Node
FROM node:latest

# Crear el directorio de la aplicación en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación para producción


# Exponer el puerto que usa tu aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD [ "npm", "run", "dev" ]

