FROM node:18

# Instala dependencias del sistema necesarias para n8n
RUN apt-get update && apt-get install -y python3 g++ build-essential

# Crea carpeta de trabajo
WORKDIR /app

# Copia todos los archivos de tu proyecto al contenedor
COPY . .

# Instala dependencias Node.js
RUN npm install

# Abre los puertos para n8n (5678) y para el servidor de políticas (3001)
EXPOSE 5678
EXPOSE 3001

# Comando que corre el servidor estático y n8n
CMD ["npm", "start"]
