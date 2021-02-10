//add user list to dom
function outputUsers(users){
  usersName.innerHTML = `${users.map(user =>`<li class="userList"><p class="names">${user.username}</p></li>`).join('')}`
}
