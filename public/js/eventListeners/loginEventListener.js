/*jshint esversion: 6 */

//get user data
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const input = e.target.elements.input.value;
  const input2 = e.target.elements.input2.value;

  //validation
  if (input.length > 2) {
    if (input.length < 24) {
      if (input2.length < 30) {
        userName = input;
        rooms = input2;
        login.style.display = 'none';
        chatBox.style.display = 'block';
        startChat();
      } else { loginError.innerText = ' Room name too long !!!';}

    } else {
      loginError.innerText = 'Your name is too long !!!';
    }
  } else {
    loginError.innerText = 'Your name is too small !!!';
  }
});
