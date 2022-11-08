document.querySelector(".bars__menu").addEventListener ("click",animateBars);

var icon__complete = document.querySelector(".bars__menu");
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var list__ul = document.querySelector(".list-ul");

function animateBars(){
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
  list__ul.classList.toggle("activehamburger__dropped")
}

      







