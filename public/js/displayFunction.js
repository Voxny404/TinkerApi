/*jshint esversion: 6 */

function myFunction() {

  const x = document.getElementById('myLinks');
  const chatBox1 = document.getElementById('chatBox1');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    chatBox1.style.display = 'block';
  } else {
    x.style.display = 'block';
    chatBox1.style.display = 'none';
  }
}
