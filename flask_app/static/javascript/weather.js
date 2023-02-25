thisis = document.querySelector("#info")
box = document.getElementById('hi')
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
                </div>
                
        </div>`
        
    return res;
}
async function show() {
    var response = await fetch("http://api.weatherapi.com/v1/current.json?key=eff73a53fac3473e8e1182249232502&q=" + currentSearch + "&aqi=no");
    var coderData = await response.json();
    console.log(coderData.current)
    thisis.innerHTML = makecodercard(coderData.current);
    box.remove()
}

