const path = require('path');
const express = require('express');


const app = express();

app.use('',express.static(path.join(__dirname, 'pages')));

app.get('/', (request, response) => {
    return response.sendFile('index.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
    return response.sendFile('dashboard.html', { root: '.'});
});

app.get('/repository', (request, response) => {
    return response.sendFile('repo.html', { root: '.'});
});

const port = '9060'
app.listen(port, () => console.log(`🌐 | Section 7 website at http://localhost:${port}`))