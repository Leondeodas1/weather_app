thisis = document.querySelector("#info")
box = document.getElementById('hi')
getid = document.querySelector("#forest")
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
                    <p>Chance of rain ${data.precip_in}</p>
                    <p>${data.cloud}</p>
                    <img src="${data.condition.icon}" alt="${data.condition.icon}">
                    <p style="font-size: small;">tempature ${data.temp_f}</p>
                    <p style="font-size: small;"> humidity: ${data.humidity} </p>
                
                
        </div>`
        
    return res;
}
function forecastcard(data) {
    var fore = `
    <div style="display: flex; justify-content: space-evenly">
            <div id="forest" style= "border-style: solid;width:16%;border-radius: 5%;padding: 10px;">
                <p >todays forcast</p>
                <p>Chance of rain ${data.hour[6].precip_in}</p>
                <p>${data.hour[6]}</p>
                <img src="${data.hour[6].condition.icon}" alt="${data.hour[6].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[6].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[6].humidity} </p>
                        
                        
            </div>
            <div id="forest" style= "border-style: solid;width:16%;border-radius: 5%;padding: 10px;">
                <p >todays forcast</p>
                <p>Chance of rain ${data.hour[9].precip_in}</p>
                <p>${data.hour[9]}</p>
                <img src="${data.hour[9].condition.icon}" alt="${data.hour[9].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[9].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[9].humidity} </p>
            </div>
            <div id="forest" style= "border-style: solid;width:16%;border-radius: 5%;padding: 10px;">
                <p >todays forcast</p>
                <p>Chance of rain ${data.hour[12].precip_in}</p>
                <p>${data.hour[12]}</p>
                <img src="${data.hour[12].condition.icon}" alt="${data.hour[12].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[12].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[12].humidity} </p>
            </div>
            <div id="forest" style= "border-style: solid;width:16%;border-radius: 5%;padding: 10px;">
                <p >todays forcast</p>
                <p>Chance of rain ${data.hour[3].precip_in}</p>
                <p>${data.hour[3]}</p>
                <img src="${data.hour[3].condition.icon}" alt="${data.hour[3].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[3].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[3].humidity} </p>
            </div>
            <div id="forest" style= "border-style: solid;width:16%;border-radius: 5%;padding: 10px;">
                <p >todays forcast</p>
                <p>Chance of rain ${data.hour[6].precip_in}</p>
                <p>${data.hour[6]}</p>
                <img src="${data.hour[6].condition.icon}" alt="${data.hour[6].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[6].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[6].humidity} </p>
            </div>
            <div id="forest" style= "border-style: solid;width:16%;border-radius: 5%;padding: 10px;">
                <p >todays forcast</p>
                <p>Chance of rain ${data.hour[9].precip_in}</p>
                <p>${data.hour[9]}</p>
                <img src="${data.hour[9].condition.icon}" alt="${data.hour[9].condition.icon}">
                <p style="font-size: small;">tempature ${data.hour[9].temp_f}</p>
                <p style="font-size: small;"> humidity: ${data.hour[9].humidity} </p>
            </div>
    </div>`
        
    return fore;
}
async function show() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=eff73a53fac3473e8e1182249232502&q=" + currentSearch + "&aqi=no");
    var coderData = await response.json();
    console.log(coderData)
    thisis.innerHTML = makecodercard(coderData.current);
    getid.innerHTML = forecastcard(coderData.forecast.forecastday[0]);
}

