console.log("Hello, World!");
console.log("success!");

function changeStatus() {
    document.getElementById("learned").innerHTML = "..3..4..learning in progress!"
}

function dailyStudy() {
    const uno = document.querySelector("#studies");
    uno.innerHTML = "coffee, code learning, breakfast, coding practice";
}

function convert() {
    const inputValue = document.getElementById("userInput").value;
    const unit = document.getElementById("unit").value;
    const milesToKm = unit === "milesToKm";
    let result = 0;
    if (milesToKm === true) {
        result = inputValue * 1.60934;
    } 
    
     else {
        result = inputValue / 1.60934;
    } 
    const resultString = inputValue + (milesToKm ? " miles is equal to " : " kilometers is equal to ") + result.toFixed(2) + (milesToKm ? " kilometers." : " miles.");
    console.log(resultString);

    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
}

function checkDegrees() {
    const inputDegree = document.getElementById("unitConverter").value;
    const celciusToDegrees = 0;
    let result = 0;

}