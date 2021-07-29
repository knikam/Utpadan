function  toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 150) {
    document.getElementById("nav").style.background = "#FFF";
  } else {
    document.getElementById("nav").style.background = "transparent";
  }
}