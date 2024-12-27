let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('#nav-links');

btnMenu.onclick = function() {
  btnMenu.classList.toggle('fa-times');
  Menu.classList.toggle('active')
}

// Image Changer
