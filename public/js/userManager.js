/*jshint esversion: 6 */

class UserManager {
  constructor(users, room) {

    this.outPutUsers(users);
    this.outPutRoomName(room);
  }

  outPutRoomName(room) {
    roomName.innerText = 'You are in room ' + '\n' + room;
  }

  outPutUsers(users) {
    usersName.innerHTML = `${users.map(user => `<li class="userList">
    <p class="names">${user.username}</p></li>`).join('')}`;
  }
}
