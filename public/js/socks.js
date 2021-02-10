let userName = "Tosy";
let rooms = "test";
const socket = io('https://apitink.herokuapp.com/') 

//activates chat
function startChat(){

  const roomName = document.getElementById('roomName'),
        usersName = document.getElementById('usersName'),
        theActualUser = document.getElementById('theActualUser');

  //display user name
  theActualUser.innerText = "User : "+userName;

  //join chat room
  socket.emit('joinRoom', { userName,rooms } )

  //get room and users
  socket.on('roomUsers',( {room, users} ) => {
    outputRoomName( room );
    outputUsers( users );
  })
  //handels connection error
  socket.on('connect_error', function() {
    setTimeout(()=> {location.reload();},5000)
  })

}
