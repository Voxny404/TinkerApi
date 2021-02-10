let roomChangerForm = document.getElementById('roomChangerForm'),
    chatForm = document.getElementById('chat-form');
//relocades the user to login
roomChangerForm.addEventListener('submit', e =>{
  e.preventDefault();
  location.reload();
})

chatForm.addEventListener('submit', e => {
  e.preventDefault();

  //get message txt
  const msg = document.getElementById('msg');

  //message and name to server
  socket.emit('chatMessage', msg.value)
  msg.value = '';
  msg.focus();
})

//lisetens for enter key
chatForm.addEventListener('keydown', e => {
  // Get the code of pressed key
  const keyCode = e.which || e.keyCode;

  // 13 represents the Enter key
  if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();

      const msg = document.getElementById('msg');

      if(!msg){

      } else {
        if(msg.value){
          //message and name to server
          socket.emit('chatMessage', msg.value)
          msg.value = '';
          msg.focus();
        }
      }
  }
});
