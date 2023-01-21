import {Navbar} from '../../Components/Navbar'

window.addEventListener("scroll",function change() {
 var nav = document.querySelector("nav");
  nav.classList.toggle("abajo", window.scrollY > 2);
}); 
window.addEventListener("scroll",function change() {
  var nav = document.querySelector("a");
   nav.classList.toggle("abajo", window.scrollY > 2);
 });
 