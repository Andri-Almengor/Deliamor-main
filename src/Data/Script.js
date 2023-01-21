const Scrollefect = window.addEventListener("scroll", function xa(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>2);
})
export default Scrollefect