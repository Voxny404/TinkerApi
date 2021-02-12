/*jshint esversion: 6 */

const contendOFFLINE = document.getElementById('contendOFFLINE');
const offlineMessage = document.getElementById('offlineMessage');

//fires when disconnected
socket.on('disconnect', () => {
  contendOFFLINE.style.display = 'block';
  chatBox.style.display = 'none';
  offlineMessage.innerText = `Oh no! I can't reach the server!`;
});
