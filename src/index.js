import "./style.css";
import Move from "./move/move";

(function start() {
  const newNode = new Move();
  const arrowLeft = document.querySelector(".arrowLeft");
  const arrowRight = document.querySelector(".arrowRight");
  const slideButtons = document.querySelectorAll(".slideButton");
  arrowLeft.addEventListener("click", () => newNode.backward());
  arrowRight.addEventListener("click", () => newNode.forward());
  Array.from(slideButtons).forEach((element, index) => {
    element.addEventListener("click", () => newNode.exactNumber(index));
  });
  setInterval(()=>{newNode.forward()},5000);
})();
