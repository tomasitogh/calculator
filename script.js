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


lightMode.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.cssText = "background-color: rgb(138, 135, 135);transition: background-color 0.3s, color 0.3s";
        });
        btn.addEventListener("mouseout", () => {
            if (btn.classList.contains("divition") ||
                btn.classList.contains("multiply") ||
                btn.classList.contains("minus") ||
                btn.classList.contains("sum") ||
                btn.classList.contains("equal")){
                    btn.style.cssText = "background-color: rgb(200, 200, 200);transition: background-color 0.3s, color 0.3s";
                } else {
                    btn.style.cssText = "background-color: rgb(200, 200, 200); color: black;transition: background-color 0.3s, color 0.3s";
                }
        }
        );
        if (btn.classList.contains("divition") ||
            btn.classList.contains("multiply") ||
            btn.classList.contains("minus") ||
            btn.classList.contains("sum") ||
            btn.classList.contains("equal")){
                btn.style.cssText = "background-color: rgb(200, 200, 200)";
            } else {
                btn.style.cssText = "background-color: rgb(200, 200, 200)); color: black";
            }
    })
    currentCalcs.style.cssText = "color: white";
    remainingCalcs.style.cssText = "color: white";
});

darkMode.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.cssText = "background-color: rgb(138, 135, 135);transition: background-color 0.3s, color 0.3s";
        });
        btn.addEventListener("mouseout", () => {
            if (btn.classList.contains("divition") ||
                btn.classList.contains("multiply") ||
                btn.classList.contains("minus") ||
                btn.classList.contains("sum") ||
                btn.classList.contains("equal")){
                    btn.style.cssText = "background-color: rgb(43, 43, 43);transition: background-color 0.3s, color 0.3s";
                } else {
                    btn.style.cssText = "background-color: rgb(43, 43, 43); color: white;transition: background-color 0.3s, color 0.3s";
                }
        }
        );
        if (btn.classList.contains("divition") ||
            btn.classList.contains("multiply") ||
            btn.classList.contains("minus") ||
            btn.classList.contains("sum") ||
            btn.classList.contains("equal")){
                btn.style.cssText = "background-color: rgb(43, 43, 43)";
            } else {
                btn.style.cssText = "background-color: rgb(43, 43, 43); color: white";
            }
    })
    currentCalcs.style.cssText = "color: black";
    remainingCalcs.style.cssText = "color: black";
});
//AC function
btnAc.addEventListener("click", () => {
    currentCalcs.textContent = "";
    remainingCalcs.textContent = "";
});
// C function
btnC.addEventListener("click", () => {
    currentCalcs.textContent = currentCalcs.textContent.slice(0, -1);
});
// Module function
btnModule.addEventListener("click", () => {
    remainingCalcs.textContent = currentCalcs.textContent + " % ";
    currentCalcs.textContent = "";
});
// Divition function
btnDiv.addEventListener("click", () => {
    remainingCalcs.textContent = currentCalcs.textContent + " / ";
    currentCalcs.textContent = "";
});
// Seven function
btnSeven.addEventListener("click", () => {
    currentCalcs.textContent += "7";
});
// Eight function
btnEight.addEventListener("click", () => {
    currentCalcs.textContent += "8";
});
// Nine function
btnNine.addEventListener("click", () => {
    currentCalcs.textContent += "9";
});
// Multiply function
btnMultiply.addEventListener("click", () => {
    remainingCalcs.textContent = currentCalcs.textContent + " * ";
    currentCalcs.textContent = "";
});
// Four function
btnFour.addEventListener("click", () => {
    currentCalcs.textContent += "4";
});
// Five function
btnFive.addEventListener("click", () => {
    currentCalcs.textContent += "5";
});
// Six function
btnSix.addEventListener("click", () => {
    currentCalcs.textContent += "6";
});
// Minus function
btnMinus.addEventListener("click", () => {
    remainingCalcs.textContent = currentCalcs.textContent + " - ";
    currentCalcs.textContent = "";
});
// One function
btnOne.addEventListener("click", () => {
    currentCalcs.textContent += "1";
});
// Two function
btnTwo.addEventListener("click", () => {
    currentCalcs.textContent += "2";
});
// Three function
btnThree.addEventListener("click", () => {
    currentCalcs.textContent += "3";
});
// Sum function
btnSum.addEventListener("click", () => {
    remainingCalcs.textContent = currentCalcs.textContent + " + ";
    currentCalcs.textContent = "";
});
// Zero function
btnZero.addEventListener("click", () => {
    currentCalcs.textContent += "0";
});
// Dot function
btnDot.addEventListener("click", () => {
    currentCalcs.textContent += ".";
});
// Equal function
btnEqual.addEventListener("click", () => {
    try {
        let expression = remainingCalcs.textContent + currentCalcs.textContent;
        let result = eval(expression);
        currentCalcs.textContent = result;
        remainingCalcs.textContent = "";
    } catch (error) {
        currentCalcs.textContent = "Error";
    }
});
