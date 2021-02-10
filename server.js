
const express = require('express'),
      app = require('express')(),
      path = require('path'),
      server = require('http').Server(app), //change to https
      io = require('socket.io')(server,{cors:{origin:"http://apitink.herokuapp.com/",methods: ["GET", "POST"]}}),
      bodyParser = require('body-parser'),
      PORT = 4000,
      PORT2 = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

server.listen(PORT2, () => process.stdout.write(`SOCKET IO listening on port ${PORT2}!\n`));

//tells the client it is up and running
app.get('/status',(req, res) =>{res.end("server is running!!!")})
app.get('/home',(req,res) =>{res.sendFile(__dirname + '/views/home.html');})
app.get('/tinker',(req,res) =>{res.sendFile(__dirname + '/views/tinker.html');})

require('./js/socketChat.js')(io);

app.listen(PORT, () => process.stdout.write(`Server running on port ${PORT} \n`));
