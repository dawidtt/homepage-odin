import "./template.css";
import dave from "./assets/pexels-olly-927022.jpg";
import daveFooter from "./assets/pexels-olly-926390.jpg";

const headerImg = document.querySelector(".header-img");
const daveImg = document.createElement("img");
daveImg.src = dave;
daveImg.alt = "Dave Ochoa";
headerImg.appendChild(daveImg);

const footerImg = document.querySelector(".footer-img");
const daveFooterImg = document.createElement("img");
daveFooterImg.src = daveFooter;
daveFooterImg.alt = "Dave Ochoa";
footerImg.appendChild(daveFooterImg);
