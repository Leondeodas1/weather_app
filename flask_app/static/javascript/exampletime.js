var today = new Date();
var time = today.getHours();
var dateTime = time;
let change =dateTime.toString()
// console.log(users)
console.log(change)
const timeStr = change;
const convertTime = timeStr => {
   const [time, modifier] = timeStr.split(' ');
   let [hours, minutes] = time.split(':');
   if (hours === '12') {
      hours = '00';
   }
   if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
   }
   return `${hours}`;
};
        console.log(convertTime(timeStr));



            // var date = new Date();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
      
    // // Check whether AM or PM
      
    // // Find current hour in AM-PM Format
    // hours = hours % 12;
      
    // // To display "0" as "12"
    // hours = hours ? hours : 12;
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    // something = hours + ':' + minutes + ' ' + newformat;
    // console.log(something)
    // if(something <= "7:00 PM"){
    //     bodystyle.style.background = "#222222";
    //     bodystyle.style.color = "#ffffff";
    // }else{
    //     console.log("no")
    // }