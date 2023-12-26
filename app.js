const darkModeOn = document.querySelector(".ligth");
const ligthModeOn = document.querySelector(".dark");
const text1EL = document.querySelector(".fonts");
const text2EL = document.querySelector(".searching");
const text3EL = document.querySelector("input");
const text4EL = document.querySelector("h1");
darkModeOn.addEventListener("click", () => {
  darkModeOn.classList.add("block");
  ligthModeOn.classList.remove("block");
  document.body.style = "background: var(--050505, #050505);";
  text1EL.style = "color: var(--FFFFFF, #FFF);";
  text2EL.style = "background: var(--1F1F1F, #1F1F1F);";
  text3EL.style = "background: var(--1F1F1F, #1F1F1F);";
  text4EL.style = "color: var(--FFFFFF, #FFF);";
});
ligthModeOn.addEventListener("click", () => {
  ligthModeOn.classList.add("block");
  darkModeOn.classList.remove("block");
  document.body.style = "background: var(--FFFFFF, #FFF);";
  text1EL.style = "color: var(--2D2D2D, #2D2D2D);";
  text2EL.style = "background: var(--F4F4F4, #F4F4F4);";
  text3EL.style = "background: var(--F4F4F4, #F4F4F4);";
  text4EL.style = "color: var(--2D2D2D, #2D2D2D);";
});
