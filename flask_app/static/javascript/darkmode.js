var bodystyle = document.querySelector("body")


    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var newformat = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    currentTime = hours +  newformat;

    // console.log(typeof(something))

var listoftime = ['8PM', '9PM', '10PM', '11PM', '12PM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM'];
for(i = 0; i<listoftime.length; i++){
    // console.log(listoftime[i])
    if( listoftime[i] == currentTime){
        bodystyle.style.background = "#222222";
        bodystyle.style.color = "#ffffff";
        thing.innerText = "lightmode";
    }else{
        bodystyle.style.background = null;
        bodystyle.style.color = null;
    }
}
