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