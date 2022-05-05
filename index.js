let scr = document.getElementById("scrn");

AC = document.getElementById("one");
BS = document.getElementById("two");
percent = document.getElementById("three");
divide = document.getElementById("four");
seven = document.getElementById("five");
eight = document.getElementById("six");
nine = document.getElementById("seven");
mul = document.getElementById("eight");
four = document.getElementById("nine");
five = document.getElementById("ten");
six = document.getElementById("eleven");
minus = document.getElementById("twelve");
one = document.getElementById("thirteen");
two = document.getElementById("fourteen");
three = document.getElementById("fifteen");
plus = document.getElementById("sixteen");
zz = document.getElementById("seventeen");
zero = document.getElementById("eighteen");
dot = document.getElementById("nineteen");
equal = document.getElementById("twenty");

document.querySelector('body').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},125)`;
})
AC.addEventListener("click", function () {
    scr.innerText = "0"
})

BS.addEventListener("click", function () {
    if (scr.innerText.length !== 1) {
        scr.innerText = scr.innerText.slice(0, scr.innerText.length - 1);
    }
    else {
        scr.innerText = 0;
    }
})

percent.addEventListener("click", function () {
    if ((!scr.innerText.includes("%")) && (!scr.innerText.includes("/")) && (!scr.innerText.includes("*")) && (!scr.innerText.includes("-")) && (!scr.innerText.includes("+"))){
        scr.innerText = scr.innerText + "%";
    }
})

divide.addEventListener("click", function () {
    if ((!scr.innerText.includes("%")) && (!scr.innerText.includes("/")) && (!scr.innerText.includes("*")) && (!scr.innerText.includes("-")) && (!scr.innerText.includes("+"))){
        scr.innerText = scr.innerText + "/";
    }
})

seven.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "7";
    }
    else {
        scr.innerText = "7";
    }
})

eight.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "8";
    }
    else {
        scr.innerText = "8";
    }
})

nine.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "9";
    }
    else {
        scr.innerText = "9";
    }
})

mul.addEventListener("click", function () {
    if ((!scr.innerText.includes("%")) && (!scr.innerText.includes("/")) && (!scr.innerText.includes("*")) && (!scr.innerText.includes("-")) && (!scr.innerText.includes("+"))){
        scr.innerText = scr.innerText + "*";
    }
})

four.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "4";
    }
    else {
        scr.innerText = "4";
    }
})

five.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "5";
    }
    else {
        scr.innerText = "5";
    }
})

six.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "6";
    }
    else {
        scr.innerText = "6";
    }
})

minus.addEventListener("click", function () {
    if ((!scr.innerText.includes("%")) && (!scr.innerText.includes("/")) && (!scr.innerText.includes("*")) && (!scr.innerText.includes("-")) && (!scr.innerText.includes("+"))){
        scr.innerText = scr.innerText + "-";
    }
})

one.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "1";
    }
    else {
        scr.innerText = "1";
    }
})

two.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "2";
    }
    else {
        scr.innerText = "2";
    }
})

three.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "3";
    }
    else {
        scr.innerText = "3";
    }
})

plus.addEventListener("click", function () {
    if ((!scr.innerText.includes("%")) && (!scr.innerText.includes("/")) && (!scr.innerText.includes("*")) && (!scr.innerText.includes("-")) && (!scr.innerText.includes("+"))){
        scr.innerText = scr.innerText + "+";
    }
})

zz.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "00";
    }
    else {
        scr.innerText = "00";
    }
})

zero.addEventListener("click", function () {
    if (scr.innerText != 0) {
        scr.innerText = scr.innerText + "0";
    }
    else {
        scr.innerText = "0";
    }
})

dot.addEventListener("click", function () {
    if (!scr.innerText.includes(".")){
        scr.innerText = scr.innerText + ".";
    }
})

equal.addEventListener("click", function () {
    scr.innerText = eval(scr.innerText);
})