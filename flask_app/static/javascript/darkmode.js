


var bodystyle = document.querySelector("body")

function changecolor(element){
    if (element.innerText == "dark Mode"){
        bodystyle.style.background = "#222222";
        bodystyle.style.color = "#ffffff";
        element.innerText = "lightmode"
    }
    if (element.innerText == "lightmode"){
        bodystyle.style.background = "#333333";
    }
    var listoftime = ['1PM', '2PM', '3PM', '4PM', '5PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12PM', '1AM', '2AM', '3AM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM'];
    
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
      
    // Check whether AM or PM
    var newformat = hours >= 12 ? 'PM' : 'AM';
      
    // Find current hour in AM-PM Format
    hours = hours % 12;
      
    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    something = hours +  newformat;
    console.log(something)
    console.log(typeof(something))
}
