# 🚀 Быстрый деплой за 3 минуты

## Вариант 1: Railway CLI (Самый быстрый)

```bash
# 1. Установите Railway CLI
curl -fsSL https://railway.app/install.sh | sh

# 2. Перейдите в директорию
cd /Users/dmitry/Downloads/frontend

# 3. Авторизуйтесь (откроется браузер)
railway login

# 4. Инициализируйте проект
railway init
# Выберите "Create new project" → введите имя "nomira-chat-frontend"

# 5. Деплой!
railway up

# 6. Получите URL
railway domain

# 7. Откройте в браузере
railway open
```

## Вариант 2: GitHub → Railway (Рекомендуется)

```bash
# 1. Создайте Git репозиторий
cd /Users/dmitry/Downloads/frontend
git init
git add .
git commit -m "Deploy frontend to Railway"

# 2. Создайте репозиторий на GitHub
gh repo create nomira-chat-frontend --public --source=. --remote=origin --push

# 3. Зайдите на Railway
# https://railway.app/new

# 4. Выберите "Deploy from GitHub repo"

# 5. Выберите "nomira-chat-frontend"

# 6. Railway автоматически задеплоит и выдаст URL!
```

## После деплоя

Ваш фронтенд будет доступен по адресу:
```
https://nomira-chat-frontend.up.railway.app
```

(точный URL смотрите в Railway Dashboard)

## Проверка

```bash
curl https://ваш-url.up.railway.app/health
# Ответ: {"status":"ok"}
```

## Обновление

Просто сделайте push в GitHub:
```bash
git add .
git commit -m "Update"
git push
```

Railway автоматически пересоберет и задеплоит.

## Готово! 🎉

Теперь ваш чат доступен всему миру!
