/*jshint esversion: 6 */
function loader() {
  let loadingText = document.getElementById('loadingText');

  loadingText.innerText = '';
  setTimeout(function () {

    //do some conection testing here
    loadingText.innerText = 'The bits are breeding';
    setTimeout(() => {
      onlineCeck();
    }, 2000);

  }, 4000);
}

loader();
