/*jshint esversion: 6 */
const { shell } = require('electron');

document.body.addEventListener('click', event => {
  // opens links in default browser
  if (event.target.id === 'urlLink' && event.target.protocol != 'file:') {
    event.preventDefault();
    shell.openExternal(event.target.href);
  }
});
