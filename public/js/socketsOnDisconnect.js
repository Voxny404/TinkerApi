const contendOFFLINE = document.getElementById('contendOFFLINE'),
      offlineMessage = document.getElementById('offlineMessage');
      // chatBox = document.getElementById('ChatBox');
//fires when disconnected
socket.on('disconnect', () => {
  contendOFFLINE.style.display = 'block';
  chatBox.style.display = 'none';
  offlineMessage.innerText = `Oh no! I can't reach the server!`
})
