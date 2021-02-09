
const express = require('express'),
      app = require('express')(),
      moment = require('moment'),
      path = require('path'),
      server = require('http').createServer(app),
      io = require('socket.io')(server),
      PORT = 8080 || process.env.PORT,

      //stores user temporarly
      {userJoin,getCurrentUser,userLeave,getRoomUsers} = require('./js/users.js');

app.use(express.static(path.join(__dirname,'public')))

// easy time format way
let time = moment().format('h:mm a')

//tells the client it is up and running
app.get('/status',(req, res) =>{res.end("server is running!!!")})

io.on('connection', socket =>{

  socket.on('joinRoom',({userName, rooms}) =>{

    //adds the user to array from client
    const user = userJoin(socket.id, userName,rooms);

    //joins room

    socket.join(user.room);

    // welcome message
    socket.emit('message', {msg:`Welcome to ${user.room}`,time:time})

    // brodcasts new user to room
    socket.broadcast.to(user.room).emit('message', {msg:`${user.username} has joined the chat`,time:time})

    //users and Room info to client
    io.to( user.room ).emit('roomUsers',{ room: user.room, users: getRoomUsers( user.room ) })

    //listens for chat Message
    socket.on('chatMessage', msg => {

      const getUser = getCurrentUser(user.id)
      io.to( user.room ).emit('message', { msg:msg, time:time , user:user.username});
    })
  })
  //client disconnect
  socket.on('disconnect', ()=>{
    const user = userLeave(socket.id);

    //checks for existing user and removes it
    if (user) {
      io.to(user.room).emit('message', {msg:`${user.username} has left the chat`,time:time})

      //users and Room info to client
      io.to( user.room ).emit('roomUsers',{ room: user.room, users: getRoomUsers(user.room) })
    }

  })
})

server.listen(PORT, () => process.stdout.write(`Server running on port ${PORT} \n`));
