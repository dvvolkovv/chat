# Nomira AI Chat - Frontend

Современный чат-интерфейс для взаимодействия с различными LLM моделями.

## Возможности

- 🤖 Выбор разных моделей (GPT-5.2, Claude Sonnet 4.5, DeepSeek, Grok и др.)
- 💬 Множество чатов с историей сообщений
- 🎙️ Голосовые сообщения
- 📎 Прикрепление файлов
- 👤 Профиль пользователя с автоматическим сбором предпочтений
- 📱 Адаптивный дизайн для мобильных устройств
- ✨ Streaming ответов в реальном времени
- 📝 Поддержка Markdown в ответах
- 🔐 Авторизация через email/пароль

## Локальный запуск

### Установка зависимостей

```bash
npm install
```

### Запуск сервера

```bash
npm start
```

Откройте http://localhost:3000 в браузере.

## Деплой на Railway

### Способ 1: Через Railway CLI

1. Установите Railway CLI:
```bash
npm install -g @railway/cli
```

2. Авторизуйтесь:
```bash
railway login
```

3. Инициализируйте проект:
```bash
cd frontend
railway init
```

4. Задеплойте:
```bash
railway up
```

5. Откройте в браузере:
```bash
railway open
```

### Способ 2: Через GitHub

1. Создайте Git репозиторий:
```bash
cd frontend
git init
git add .
git commit -m "Initial commit"
```

2. Загрузите на GitHub:
```bash
gh repo create nomira-chat-frontend --public --source=. --remote=origin --push
```
или создайте репозиторий вручную на GitHub и:
```bash
git remote add origin https://github.com/ваш-username/ваш-репо.git
git branch -M main
git push -u origin main
```

3. В Railway:
   - Зайдите на https://railway.app
   - Нажмите "New Project"
   - Выберите "Deploy from GitHub repo"
   - Выберите ваш репозиторий
   - Railway автоматически обнаружит Node.js и задеплоит

### Способ 3: Через Railway Dashboard

1. Зайдите на https://railway.app
2. Нажмите "New Project" → "Empty Project"
3. Добавьте "Service" → "Empty Service"
4. В настройках сервиса:
   - В разделе "Source" подключите GitHub репозиторий
   - Или используйте CLI: `railway link` и `railway up`

### Переменные окружения

Railway автоматически установит `PORT`, но при необходимости можно добавить:

```
NODE_ENV=production
```

### Настройка домена

После деплоя Railway выдаст публичный URL типа:
```
https://ваш-проект.up.railway.app
```

Можно добавить свой домен в настройках проекта.

## Структура проекта

```
frontend/
├── server.js           # Express сервер
├── package.json        # Зависимости
├── public/
│   └── index.html     # React приложение (весь фронтенд)
└── README.md          # Эта документация
```

## Технологии

- **React 18** - UI библиотека
- **Tailwind CSS** - стилизация (через CDN)
- **Express** - веб-сервер
- **Marked.js** - рендеринг Markdown
- **Babel Standalone** - JSX трансформация в браузере

## Backend API

Фронтенд подключается к n8n API:
- `https://travel-n8n.up.railway.app/webhook/get_llm` - список моделей
- `https://travel-n8n.up.railway.app/webhook/register` - регистрация
- `https://travel-n8n.up.railway.app/webhook/login` - вход
- `https://travel-n8n.up.railway.app/webhook/get_chats` - список чатов
- `https://travel-n8n.up.railway.app/webhook/create_chat` - создание чата
- `https://travel-n8n.up.railway.app/webhook/get_messages` - история сообщений
- `https://travel-n8n.up.railway.app/webhook/chat` - отправка сообщения (streaming)

## Поддержка

При возникновении проблем проверьте:
1. Все ли зависимости установлены (`npm install`)
2. Доступен ли backend API
3. Правильно ли настроены CORS на backend
4. Логи сервера для отладки

## Лицензия

MIT
