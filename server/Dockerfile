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

# Exponer el puerto que usa tu aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]
