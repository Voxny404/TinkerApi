let chatBox = document.getElementById("ChatBox");

function join (){

  let loginForm = document.getElementById("loginForm"),
      login = document.getElementById("login"),
      loginError = document.getElementById('loginError'),
      loader= document.getElementById("loader");

  loader.style.display ="none";
  login.style.display = 'block';
  //hide chat box until needed
  chatBox.style.display = 'none';
}
