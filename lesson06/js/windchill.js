var tempF = parseFloat(document.getElementById("temperature").textContent);
var speed = parseFloat(document.getElementById("wind").textContent);
var chill = windChill(tempF, speed);

function windChill(tempF, speed) {
    if (tempF > 50){
        return "Not Applicable";
    } else if (speed < 3){
        return "Not Applicable";
    } else {
    return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
  }
}

document.getElementById('outputDiv').innerHTML = chill;