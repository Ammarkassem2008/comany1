let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('#nav-links');

btnMenu.onclick = function() {
  btnMenu.classList.toggle('fa-times');
  Menu.classList.toggle('active')
}

// Image Changer

let image = document.getElementById('image');
let images = ['./images/img1.jpg' , './images/img2.jpg' , './images/img3.jpg' , './images/img4.jpg' , './images/img5.jpg'];
setInterval(function(){
  let rnd = Math.floor(Math.random()*images.length);
  image.src = images[rnd];
},4000);