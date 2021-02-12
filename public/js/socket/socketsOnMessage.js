/*jshint esversion: 6 */
const messageContainer = document.getElementById('chat-messages');

//message from sever
socket.on('message', message => {

  //playes notification when not target and if user true
  if (!document.hasFocus()) {
    if (message.user) {audio.play();}
  }

  outputMessage(message);

  //scrolls down
  messageContainer.scrollTop = messageContainer.scrollHeight;
});
