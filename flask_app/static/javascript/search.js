var thisis = document.querySelector("#info")
var box = document.getElementById('hi')
var getid = document.querySelector("#forest")
var airquaity = document.querySelector("#air")
console.log(getid)
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
                    <img src="${data.condition.icon}" alt="${data.condition.icon}">
                    
                    <p style="font-size: small;"> humidity: ${data.humidity} </p>
                
                
        </div>`
        
    return res;
}
function forecastcard(data) {
    var fore = `
    <div style="display: flex; justify-content: space-evenly">
            <div id="forest" style= "border-right: solid ; width:16%;padding: 10px;">
                <p >6:00 AM</p>
                <img src="${data.hour[6].condition.icon}" alt="${data.hour[6].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[6].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[6].humidity} </p>
            </div>
            <div id="forest" style= "border-right: solid ;width:16%;padding: 10px;">
                <p >9:00 AM</p>
                <img src="${data.hour[9].condition.icon}" alt="${data.hour[9].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[9].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[9].humidity} </p>
            </div>
            <div id="forest" style= "border-right: solid ;width:16%;padding: 10px;">
                <p >12:00 PM</p>
                <img src="${data.hour[12].condition.icon}" alt="${data.hour[12].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[12].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[12].humidity} </p>
            </div>
            <div id="forest" style= "border-right: solid ;width:16%;;padding: 10px;">
                <p >3:00 PM</p>
                <img src="${data.hour[3].condition.icon}" alt="${data.hour[3].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[3].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[3].humidity} </p>
            </div>
            <div id="forest" style= "border-right: solid ;width:16%;padding: 10px;">
                <p >6:00 PM</p>
                <img src="${data.hour[6].condition.icon}" alt="${data.hour[6].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[6].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[6].humidity} </p>
            </div>
            <div id="forest" style= "width:16%;padding: 10px;">
                <p >9:00 PM</p>
                <img src="${data.hour[9].condition.icon}" alt="${data.hour[9].condition.icon}">
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
                    <p style="font-size: small;">real feel ${data.feelslike_f}</p>
                    <p>Chance of rain ${data.precip_in} %</p>
                    <p>${data.wind_mph} mph</p>
                    <p style="font-size: small;"> UV index: ${data.uv} </p>
                
                
        </div>`
        
    return res;
}
async function show() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=eff73a53fac3473e8e1182249232502&q=" + currentSearch + "&aqi=no");
    var coderData = await response.json();
    console.log(coderData)
    thisis.innerHTML = makecodercard(coderData.current);
    getid.innerHTML = forecastcard(coderData.forecast.forecastday[0]);
    airquaity.innerHTML = airqua(coderData.current);
}
