/*jshint esversion: 6 */

let userName = 'Tosy';
let rooms = 'test';
const socket = io(apiCon); //onlineCeck

//activates chat
function startChat() {

  const roomName = document.getElementById('roomName');
  const usersName = document.getElementById('usersName');
  const theActualUser = document.getElementById('theActualUser');

  //display user name
  theActualUser.innerText = 'User : ' + userName;

  //join chat room
  socket.emit('joinRoom', { userName, rooms });

  //get room and users
  socket.on('roomUsers', ({ room, users }) => {
    new UserManager(users, room);

  });

  //handels connection error
  socket.on('connect_error', function () {
    setTimeout(()=> {location.reload();}, 5000);
  });

}
