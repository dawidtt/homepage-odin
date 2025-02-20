import "./template.css";
import dave from "./assets/pexels-olly-927022.jpg";
import daveFooter from "./assets/pexels-olly-926390.jpg";
import daveFooterTablet from "./assets/pexels-olly-926390-tablet.jpg";

const headerImg = document.querySelector(".header-img");
const daveImg = document.createElement("img");
daveImg.src = dave;
daveImg.alt = "Dave Ochoa";
headerImg.appendChild(daveImg);

const picture = document.createElement("picture");
const sourceTablet = document.createElement("source");
sourceTablet.srcset = daveFooterTablet;
sourceTablet.media = "(min-width: 550px)";
const sourceComputer = document.createElement("source");
sourceComputer.srcset = daveFooter;
sourceComputer.media = "(min-width: 800px)";
picture.appendChild(sourceComputer);
picture.appendChild(sourceTablet);
const footerImg = document.querySelector(".footer-img");
const daveFooterImg = document.createElement("img");
daveFooterImg.src = daveFooter;
daveFooterImg.alt = "Dave Ochoa";

picture.appendChild(daveFooterImg);
footerImg.appendChild(picture);
