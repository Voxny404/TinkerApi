/*jshint esversion: 6 */
const express = require('express');
const app = require('express')();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: 'http://apitink.herokuapp.com/',
      methods: ['GET', 'POST'],
    },
  });
const bodyParser = require('body-parser');
const PORT = 4000;
const PORT2 = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

server.listen(PORT2, () => process.stdout.write(`SOCKET IO listening on port ${PORT2}!\n`));

app.get('/status', (req, res) => { res.end('server is running!!!'); });
app.get('/home', (req, res) => { res.sendFile(__dirname + '/views/home.html'); });
app.get('/tinker',(req, res) => { res.sendFile(__dirname + '/views/tinker.html'); });

require('./js/socketChat.js')(io);

app.listen(PORT, () => process.stdout.write(`Server running on port ${PORT} \n`));
