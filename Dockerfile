# Utiliza una imagen oficial de Node.js como base
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instala las dependencias
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else npm install; \
  fi

# Copia el resto de la aplicación
COPY . .

# Copia el archivo .env si existe
# (En producción, lo ideal es usar variables de entorno en tiempo de ejecución)
# COPY .env .env

# Construye la aplicación Next.js
RUN npm run build

# --------- Fase de producción ---------
FROM node:18-alpine AS runner

WORKDIR /app

# Copia solo los archivos necesarios desde el builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Copia el archivo .env si existe
COPY .env .env

# Expone el puerto por defecto de Next.js
EXPOSE 3000

# Comando por defecto para iniciar la app
CMD ["npm", "start"]
