// Date objects = objects that  containn values that represent dates and times
//                These date objects can be changed and formatted
// Date(year, month, day, hour,minute, second, ms)

//const date = new Date(2024, 0, 2, 3, 4, 5);
const date = new Date();
const date1=new Date("2023-12-31");
const date2=new Date("2023-12-01");

const year=date.getFullYear();
const month=date.getMonth();
const day=date.getDate();
const hour=date.getHours();
const minute=date.getMinutes();
const second=date.getSeconds();
const dayOfWeek=date.getDay();

if(date2>date1){
    console.log("HAPPY NEW YEAR!");
}
else
{
    console.log("NOT HAPPY NEW YEAR!");
}
console.log(date);
console.log(year);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(dayOfWeek);
