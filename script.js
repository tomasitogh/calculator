// SI toco igual, muestra resultado en la variable cuenta
// si toco algun boton de operacion, lo suma a la cuenta y despues lo muestra en el display de los calculos remaining
// C de clear solo saca un digito de la cuenta
// AC de ALL CLEAR elimina la cuenta por completo
const buttons = document.querySelectorAll(".calc-button");

const lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");

const remainingCalcs = document.querySelector("#remaining-label");
const currentCalcs = document.querySelector("#current-label");

const btnAc = document.querySelector(".ac");
const btnC = document.querySelector(".c");
const btnModule = document.querySelector(".module");
const btnDiv = document.querySelector(".divition");
const btnSeven = document.querySelector(".btn-7");
const btnEight = document.querySelector(".btn-8");
const btnNine = document.querySelector(".btn-9");
const btnMultiply = document.querySelector(".multiply");
const btnFour = document.querySelector(".btn-4");
const btnFive = document.querySelector(".btn-5");
const btnSix = document.querySelector(".btn-6");
const btnMinus = document.querySelector(".minus");
const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const btnThree = document.querySelector(".btn-3");
const btnSum = document.querySelector(".sum");
const btnZero = document.querySelector(".btn-0");
const btnDot = document.querySelector(".dot");
const btnEqual = document.querySelector(".equal");

console.log("Buttons:", buttons);

lightMode.addEventListener("click", () => {
    console.log("Light mode clicked");
    buttons.forEach(btn => {
        if (btn.classList.contains("divition") ||
            btn.classList.contains("multiply") ||
            btn.classList.contains("minus") ||
            btn.classList.contains("sum") ||
            btn.classList.contains("equal")){
                btn.style.cssText = "background-color: white";
                return;
            } else {
                btn.style.cssText = "background-color: white; color: black";
            }
    })
});

darkMode.addEventListener("click", () => {
    console.log("Dark mode clicked");
    buttons.forEach(btn => {
        if (btn.classList.contains("divition") ||
            btn.classList.contains("multiply") ||
            btn.classList.contains("minus") ||
            btn.classList.contains("sum") ||
            btn.classList.contains("equal")){
                btn.style.cssText = "background-color: rgb(43, 43, 43)";
                return;
            } else {
                btn.style.cssText = "background-color: rgb(43, 43, 43); color: white";
            }
    })
});