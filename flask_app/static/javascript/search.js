var thisis = document.querySelector("#info");
var box = document.getElementById('hi');
var getid = document.querySelector("#forest");
var airquaity = document.querySelector("#air");
var x = document.getElementById("demo");
var week = document.querySelector("#weatherweeks")




var currentSearch = "";

function search(element){
    // console.log(element.value);
    currentSearch = element.value;
    console.log(currentSearch)
}

function makecodercard(data) {
    var res = `
    <div id="info" style= "border-style: solid;width:50%;border-radius: 5%;padding: 10px;">
        <p style="font-weight: bolder; font-size: x-large;"> ${currentSearch}</p>
        <p style="font-size: small;">tempature ${data.temp_f}</p>
        <p>Chance of rain ${data.precip_in}</p>
        <p>${data.cloud}</p>
        <img src="https:${data.condition.icon}" alt="${data.condition.icon}">
        <p style="font-size: small;"> humidity: ${data.humidity} </p>
    </div>`
        
    return res;
}
function forecastcard(data) {
    var fore = `
    <div style="display: flex; justify-content: space-evenly">
        <div id="forest" style= "border-right: solid ; width:16%;padding: 10px;">
            <p >6:00 AM</p>
            <img src="https:${data.hour[6].condition.icon}" alt="${data.hour[6].condition.icon}">
            <p style="font-size: small;">tempature ${data.hour[6].temp_f}</p>
            <p style="font-size: small;"> humidity: ${data.hour[6].humidity} </p>
        </div>
        <div id="forest" style= "border-right: solid ;width:16%;padding: 10px;">
            <p >9:00 AM</p>
            <img src="https:${data.hour[9].condition.icon}" alt="${data.hour[9].condition.icon}">
            <p style="font-size: small;">tempature ${data.hour[9].temp_f}</p>
            <p style="font-size: small;"> humidity: ${data.hour[9].humidity} </p>
        </div>
        <div id="forest" style= "border-right: solid ;width:16%;padding: 10px;">
            <p >12:00 PM</p>
            <img src="https:${data.hour[12].condition.icon}" alt="${data.hour[12].condition.icon}">
            <p style="font-size: small;">tempature ${data.hour[12].temp_f}</p>
            <p style="font-size: small;"> humidity: ${data.hour[12].humidity} </p>
        </div>
        <div id="forest" style= "border-right: solid ;width:16%;;padding: 10px;">
            <p >3:00 PM</p>
            <img src="https:${data.hour[3].condition.icon}" alt="${data.hour[3].condition.icon}">
            <p style="font-size: small;">tempature ${data.hour[3].temp_f}</p>
            <p style="font-size: small;"> humidity: ${data.hour[3].humidity} </p>
        </div>
        <div id="forest" style= "border-right: solid ;width:16%;padding: 10px;">
            <p >6:00 PM</p>
            <img src="https:${data.hour[6].condition.icon}" alt="${data.hour[6].condition.icon}">
            <p style="font-size: small;">tempature ${data.hour[6].temp_f}</p>
            <p style="font-size: small;"> humidity: ${data.hour[6].humidity} </p>
        </div>
        <div id="forest" style= "width:16%;padding: 10px;">
            <p >9:00 PM</p>
            <img src="https:${data.hour[9].condition.icon}" alt="${data.hour[9].condition.icon}">
            <p style="font-size: small;">tempature ${data.hour[9].temp_f}</p>
            <p style="font-size: small;"> humidity: ${data.hour[9].humidity} </p>
        </div>
    </div>`
        
    return fore;
}
function airqua(data) {
    var res = `
    <div id="info" style= "border-style: solid;width:50%;border-radius: 5%;padding: 10px;">
        <p style="font-weight: bolder; font-size: x-large;"> Air conditions</p>
        <p style="font-size: small;">real feel ${data.display}</p>
        <p>Chance of rain ${data.precip_in} %</p>
        <p>${data.wind_mph} mph</p>
        <p style="font-size: small;"> UV index: ${data.uv} </p>
    </div>`
        
    return res;
}


function stevendayweathers(data){
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date(data[0].date);
const d1 = new Date(data[1].date);
const d2 = new Date(data[2].date);
const d3 = new Date(data[3].date);
const d4 = new Date(data[4].date);
const d5 = new Date(data[5].date);
const d6 = new Date(data[6].date);



console.log(d)
let day = weekday[d.getDay()];
let day1 = weekday[d1.getDay()];
let day2 = weekday[d2.getDay()];
let day3 = weekday[d3.getDay()];
let day4 = weekday[d4.getDay()];
let day5 = weekday[d5.getDay()];
let day6 = weekday[d6.getDay()];
console.log(day)

    var res = `
        <div class="innerbox2" id="weatherweeks" >
        <p style="font-weight: bolder; font-size: x-large;"> ${day}</p>
        <div style="display:flex;justify-content:space-between;">
        <img src="https:${data[0].day.condition.icon}" alt="${data[0].day.condition.icon}">
        <p style="font-size: small;">${data[0].day.condition.text}</p>
        <p>${data[0].day.maxtemp_f}/ ${data[0].day.mintemp_f}</p>
        </div>
    </div>
    <div class="innerbox2" id="weatherweeks">
        <p style="font-weight: bolder; font-size: x-large;"> ${day1}</p>
        <div style="display:flex;justify-content:space-between;">
        <img src="https:${data[1].day.condition.icon}" alt="${data[1].day.condition.icon}">
        <p style="font-size: small;">${data[1].day.condition.text}</p>
        <p>${data[1].day.maxtemp_f}/ ${data[1].day.mintemp_f}</p>
        </div>
    </div>
    <div class="innerbox2" id="weatherweeks">
        <p style="font-weight: bolder; font-size: x-large;"> ${day2}</p>
        <div style="display:flex;justify-content:space-between;">
        <img src="https:${data[2].day.condition.icon}" alt="${data[2].day.condition.icon}">
        <p style="font-size: small;">${data[2].day.condition.text}</p>
        <p>${data[2].day.maxtemp_f}/ ${data[2].day.mintemp_f}</p>
        </div>
    </div>
    <div class="innerbox2" id="weatherweeks">
        <p style="font-weight: bolder; font-size: x-large;"> ${day3}</p>
        <div style="display:flex;justify-content:space-between;">
        <img src="https:${data[3].day.condition.icon}" alt="${data[3].day.condition.icon}">
        <p style="font-size: small;">${data[3].day.condition.text}</p>
        <p>${data[3].day.maxtemp_f}/ ${data[3].day.mintemp_f}</p>
        </div>
    </div>
    <div class="innerbox2" id="weatherweeks">
        <p style="font-weight: bolder; font-size: x-large;"> ${day4}</p>
        <div style="display:flex;justify-content:space-between;">
        <img src="https:${data[4].day.condition.icon}" alt="${data[4].day.condition.icon}">
        <p style="font-size: small;">${data[4].day.condition.text}</p>
        <p>${data[4].day.maxtemp_f}/ ${data[4].day.mintemp_f}</p>
        </div>
    </div>
    <div class="innerbox2" id="weatherweeks">
        <p style="font-weight: bolder; font-size: x-large;"> ${day5}</p>
        <div style="display:flex;justify-content:space-between;">
        <img src="https:${data[5].day.condition.icon}" alt="${data[5].day.condition.icon}">
        <p style="font-size: small;">${data[5].day.condition.text}</p>
        <p>${data[5].day.maxtemp_f}/ ${data[5].day.mintemp_f}</p>
        </div>
    </div>
    <div class="innerbox2" id="weatherweeks">
        <p style="font-weight: bolder; font-size: x-large;"> ${day6}</p>
        <div style="display:flex;justify-content:space-between;">
        <img src="https:${data[6].day.condition.icon}" alt="${data[6].day.condition.icon}">
        <p style="font-size: small;">${data[6].day.condition.text}</p>
        <p>${data[6].day.maxtemp_f}/ ${data[6].day.mintemp_f}</p>
        </div>
    </div>
`
        
    return res;
}

async function show() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=eff73a53fac3473e8e1182249232502&q=" + currentSearch + "&days=7&aqi=yes");
    var coderData = await response.json(); 
    console.log(coderData)
    thisis.innerHTML = makecodercard(coderData.current);
    getid.innerHTML = forecastcard(coderData.forecast.forecastday[0]);
    airquaity.innerHTML = airqua(coderData.current);
    week.innerHTML = stevendayweathers(coderData.forecast.forecastday);
}

const successCallback = (position) => {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var text = ""
    
    var nothing  = text.concat(latitude+","+longitude)
    fetch("http://api.weatherapi.com/v1/forecast.json?key=eff73a53fac3473e8e1182249232502&q="+ nothing +"&days=7&aqi=yes")
    .then(response => {
        return response.json();
    })
    .then(users => {
        console.log(users)
    thisis.innerHTML = makecodercard(users.current);
    getid.innerHTML = forecastcard(users.forecast.forecastday[0]);
    airquaity.innerHTML = airqua(users.current);
    week.innerHTML = stevendayweathers(users.forecast.forecastday)
    })
};

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


var xyValues = [
    {x:5, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 1, max:24}}],
        yAxes: [{ticks: {min: 1, max:43}}],
      }
    }
  });