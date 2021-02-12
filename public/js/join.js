/*jshint esversion: 6 */
let chatBox = document.getElementById('ChatBox');

function join() {

  let loginForm = document.getElementById('loginForm');
  let login = document.getElementById('login');
  let loginError = document.getElementById('loginError');
  let loader = document.getElementById('loader');

  loader.style.display = 'none';
  login.style.display = 'block';
  chatBox.style.display = 'none';
}
