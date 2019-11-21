const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=43d3aa19f1bf7785b8ffa9aa69a74209";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = jsObject.weather[0].main;
    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;



    var tempF = parseFloat(document.getElementById("temperature").textContent);
    var speed = parseFloat(document.getElementById("wind").textContent);
    var chill = windChill(tempF, speed);

    function windChill(tempF, speed) {
        if (tempF > 50){
            return "N/A";
        } else if (speed < 3){
            return "N/A";
        } else {
        return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    }
    }

    document.getElementById('outputDiv').innerHTML = chill.toFixed(0) + " mph";


  });

const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=43d3aa19f1bf7785b8ffa9aa69a74209";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('day1').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png');  
        document.getElementById('day1').setAttribute('alt', jsObject.list[3].weather[0].description + ' icon');
        document.getElementById('day1temp').textContent = jsObject.list[3].main.temp_max.toFixed(0);

        document.getElementById('day2').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[11].weather[0].icon + '.png');  
        document.getElementById('day2').setAttribute('alt', jsObject.list[11].weather[0].description + ' icon');
        document.getElementById('day2temp').textContent = jsObject.list[11].main.temp_max.toFixed(0);

        document.getElementById('day3').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[19].weather[0].icon + '.png');  
        document.getElementById('day3').setAttribute('alt', jsObject.list[19].weather[0].description + ' icon');
        document.getElementById('day3temp').textContent = jsObject.list[19].main.temp_max.toFixed(0);

        document.getElementById('day4').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[27].weather[0].icon + '.png');  
        document.getElementById('day4').setAttribute('alt', jsObject.list[27].weather[0].description + ' icon');
        document.getElementById('day4temp').textContent = jsObject.list[27].main.temp_max.toFixed(0);

        document.getElementById('day5').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[35].weather[0].icon + '.png');  
        document.getElementById('day5').setAttribute('alt', jsObject.list[35].weather[0].description + ' icon');
        document.getElementById('day5temp').textContent = jsObject.list[35].main.temp_max.toFixed(0);

    });

    var d = new Date();
    var weekday = new Array(14);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    weekday[7] = "Sun";
    weekday[8] = "Mon";
    weekday[9] = "Tue";
    weekday[10] = "Wed";
    weekday[11] = "Thu";
    weekday[12] = "Fri";
    weekday[13] = "Sat";
  
    var one = weekday[d.getDay() + 1];
    var two = weekday[d.getDay() + 2];
    var thr = weekday[d.getDay() + 3];
    var fou = weekday[d.getDay() + 4];
    var fiv = weekday[d.getDay() + 5];
    document.getElementById("wday1").textContent = one;
    document.getElementById("wday2").textContent = two;
    document.getElementById("wday3").textContent = thr;
    document.getElementById("wday4").textContent = fou;
    document.getElementById("wday5").textContent = fiv;