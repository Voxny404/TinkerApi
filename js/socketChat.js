/*jshint esversion: 6 */
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./users.js');
const moment = require('moment');

module.exports = function (io) {

  // easy time format way
  let time = moment().format('h:mm a');
  io.on('connection', socket => {

    socket.on('joinRoom', ({ userName, rooms }) => {

      //adds the user to array from client
      const user = userJoin(socket.id, userName, rooms);

      //joins room
      socket.join(user.room);

      // welcome message
      socket.emit('message', { msg: `Welcome to ${user.room}`, time: time });

      // brodcasts new user to room
      socket.broadcast.to(user.room).emit('message', {
        msg: `${user.username} has joined the chat`,
        time: time,
      });

      //users and Room info to client
      io.to(user.room).emit('roomUsers', { room: user.room, users: getRoomUsers(user.room) });

      //listens for chat Message
      socket.on('chatMessage', msg => {

        const getUser = getCurrentUser(user.id);
        io.to(user.room).emit('message', { msg: msg, time: time, user: user.username, });
      });
    });

    //client disconnect
    socket.on('disconnect', () => {
      const user = userLeave(socket.id);

      //checks for existing user and removes it
      if (user) {
        io.to(user.room).emit('message', { msg: `${user.username} has left the chat`, time: time });

        //users and Room info to client
        io.to(user.room).emit('roomUsers', { room: user.room, users: getRoomUsers(user.room) });
      }

    });
  });
};
