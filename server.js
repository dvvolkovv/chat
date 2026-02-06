const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Включаем gzip сжатие
app.use(compression());

// Отдаем статические файлы из директории public
app.use(express.static('public', {
    maxAge: '1d',
    etag: true
}));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Здоровье для Railway
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// 404 для всех остальных маршрутов - редирект на главную (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Frontend server is running on port ${PORT}`);
    console.log(`🌍 Open http://localhost:${PORT} in your browser`);
});
