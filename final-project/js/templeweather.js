const apiURLcardston = "https://api.openweathermap.org/data/2.5/weather?id=5916821&units=imperial&APPID=43d3aa19f1bf7785b8ffa9aa69a74209";
fetch(apiURLcardston)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('cardstoncurrent').textContent = jsObject.weather[0].main;
    document.getElementById('cardstontemperature').textContent = jsObject.main.temp;
  });
const apiURLcalgary = "https://api.openweathermap.org/data/2.5/weather?id=5913490&units=imperial&APPID=43d3aa19f1bf7785b8ffa9aa69a74209";
fetch(apiURLcalgary)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('calgarycurrent').textContent = jsObject.weather[0].main;
    document.getElementById('calgarytemperature').textContent = jsObject.main.temp;
  });
const apiURLedmonton = "https://api.openweathermap.org/data/2.5/weather?id=5946768&units=imperial&APPID=43d3aa19f1bf7785b8ffa9aa69a74209";
fetch(apiURLedmonton)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('edmontoncurrent').textContent = jsObject.weather[0].main;
    document.getElementById('edmontontemperature').textContent = jsObject.main.temp;
  });
const apiURLvancouver = "https://api.openweathermap.org/data/2.5/weather?id=6173331&units=imperial&APPID=43d3aa19f1bf7785b8ffa9aa69a74209";
fetch(apiURLvancouver)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('vancouvercurrent').textContent = jsObject.weather[0].main;
    document.getElementById('vancouvertemperature').textContent = jsObject.main.temp;
  });