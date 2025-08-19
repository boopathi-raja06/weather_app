import "./styles.css";
import home from "./pages_js/home"
import about from "./pages_js/about"
import loadmenu from "./pages_js/menu"

const cont=document.querySelector("#content");

const homebtn=document.querySelector('#home')
const menubtn=document.querySelector('#menu')
const aboutbtn=document.querySelector('#about')
homebtn.addEventListener("click",home)
menubtn.addEventListener("click",loadmenu)
aboutbtn.addEventListener("click",about)
home()