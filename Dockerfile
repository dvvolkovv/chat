FROM node:18-alpine

WORKDIR /app

# Копируем package files
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем код
COPY . .

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["node", "server.js"]
