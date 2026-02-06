# Быстрый деплой на Railway

## Самый быстрый способ (через CLI)

### 1. Установите Railway CLI

```bash
# macOS/Linux
curl -fsSL https://railway.app/install.sh | sh

# Или через npm
npm install -g @railway/cli
```

### 2. Авторизуйтесь

```bash
railway login
```

Откроется браузер для авторизации через GitHub.

### 3. Перейдите в директорию проекта

```bash
cd /Users/dmitry/Downloads/frontend
```

### 4. Инициализируйте проект

```bash
railway init
```

Выберите:
- "Create new project" → введите имя (например: `nomira-chat-frontend`)
- Подтвердите

### 5. Задеплойте

```bash
railway up
```

Railway автоматически:
- Обнаружит Node.js проект
- Установит зависимости
- Запустит `npm start`
- Выделит публичный URL

### 6. Получите URL

```bash
railway domain
```

Или откройте в браузере:
```bash
railway open
```

## Альтернативный способ (через GitHub)

### 1. Создайте Git репозиторий

```bash
cd /Users/dmitry/Downloads/frontend
git init
git add .
git commit -m "Initial frontend deployment"
```

### 2. Создайте репозиторий на GitHub

```bash
# Через GitHub CLI (если установлен)
gh repo create nomira-chat-frontend --public --source=. --remote=origin --push

# Или вручную на github.com, затем:
git remote add origin https://github.com/ваш-username/nomira-chat-frontend.git
git branch -M main
git push -u origin main
```

### 3. Подключите к Railway

1. Откройте https://railway.app/dashboard
2. Нажмите **"New Project"**
3. Выберите **"Deploy from GitHub repo"**
4. Выберите ваш репозиторий `nomira-chat-frontend`
5. Railway автоматически задеплоит

### 4. Настройте домен

1. В Railway Dashboard откройте ваш сервис
2. Перейдите в **Settings** → **Networking**
3. Нажмите **"Generate Domain"**
4. Скопируйте URL (будет типа `nomira-chat-frontend.up.railway.app`)

## Проверка деплоя

После деплоя проверьте:

```bash
curl https://ваш-домен.up.railway.app/health
```

Должен вернуть:
```json
{"status":"ok"}
```

Затем откройте в браузере:
```
https://ваш-домен.up.railway.app
```

## Обновление после изменений

### Через CLI:

```bash
railway up
```

### Через Git:

```bash
git add .
git commit -m "Update frontend"
git push
```

Railway автоматически пересоберет и задеплоит.

## Логи и мониторинг

Смотрите логи в реальном времени:

```bash
railway logs
```

Или в Railway Dashboard → ваш сервис → **Deployments** → выберите деплой → **View Logs**

## Переменные окружения (если нужны)

Добавить переменные можно:

```bash
railway variables set NODE_ENV=production
```

Или через Dashboard → Settings → Variables

## Удаление проекта

```bash
railway down
```

Или через Dashboard → Settings → Danger → Delete Service

## Проблемы?

### Порт не работает

Railway автоматически устанавливает переменную `PORT`. Убедитесь что `server.js` использует `process.env.PORT`.

### CORS ошибки

Если возникают CORS проблемы с backend API, убедитесь что в n8n webhook настройках установлено:
```
allowedOrigins: "*"
```

### 404 на маршрутах

SPA настроен - все маршруты ведут на `index.html`.
