import "./template.css";
import dave from "./assets/pexels-olly-927022.jpg";

const headerImg = document.querySelector(".header-img");
const daveImg = document.createElement("img");
daveImg.src = dave;
daveImg.alt = "Dave Ochoa";
headerImg.appendChild(daveImg);
