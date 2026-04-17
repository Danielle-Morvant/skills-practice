console.log("Hello, World!");
console.log("success!");

function changeStatus() {
    document.getElementById("learned").innerHTML = "..3..4..learning in progress!"
}

function dailyStudy() {
    const uno = document.querySelector("#studies");
    uno.innerHTML = "coffee, code learning, breakfast, coding practice";
}

const inputValue = 10;
const milesToKm = true;


let result = 0;

if (milesToKm === true) {
 result = inputValue * 1.60934;
} else {
 result = inputValue / 1.60934;
}

const resultString = inputValue + " miles are " + result + " km";

console.log(resultString);

const resultElement = document.getElementById('resultElement');
resultElement.innerHTML =resultString;