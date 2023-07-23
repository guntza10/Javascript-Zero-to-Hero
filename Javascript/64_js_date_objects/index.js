// The Date object is used to work with dates & times

let date = new Date(); // current date and time zone
// date.toLocaleString(); // convert date object to string format date.It's default follow user's locale
// date.toLocaleString('en-GB') // convert date object to string format date (specific english locale)
//let date = new Date(0); // pass millisecond if 0 it random current day,month and years for beginning (imagine) หรือ ถ้าใส่ millisecond มันจะนับจาก beginning date ที่มันจินตนาการขึ้นมา
//let date = new Date(2023, 0, 1, 2, 3, 4, 5); // year,month(start from jan [0]),day,hour,minute,second,milisecond
//let date = new Date("January 1, 2023 00:00:00"); // pass with string date and time format

// format
/*
1. ISO 8601 Extended Format: "YYYY-MM-DDTHH:mm:ss.sssZ" => ex. new Date("2019-01-01T00:00:00.000Z")
2. Short Date Format: "MM/DD/YYYY" or "DD/MM/YYYY" => ex. new Date("01/31/2019")
3. Long Date Format: "Month DD, YYYY" => ex. new Date("January 31, 2019")
4. Date and Time String: "MM/DD/YYYY, HH:mm:ss" => ex. new Date("01/31/2019, 14:20:30")
5. UTC Date and Time String: "Month DD, YYYY, HH:mm:ss UTC" => ex. new Date("January 31, 2019, 14:20:30 UTC")
6. Date and Time String with Timezone Information: "Month DD, YYYY, HH:mm:ss GMT+HHMM" or "Month DD, YYYY, HH:mm:ss GMT-HHMM" => ex. new Date("January 31, 2019, 14:20:30 GMT+0200")
7. Date with hyphen separators: "YYYY-MM-DD" => ex. new Date("2019-01-31")
8. Date and time with hyphen and colon separators: "YYYY-MM-DDTHH:MM:SS" => ex. new Date("2019-01-31T14:20:30")
*/

/*
let year = date.getFullYear(); // get year from date object
let dayOfMonth = date.getDate(); // get day of month from date object
let dayOfWeek = date.getDay(); // get day of week from date object [from sunday (0) - saturday(6)]
let month = date.getMonth();  // get month from date object [from Jan (0) - Dec(11)]
let hour = date.getHours(); // get hour from date object (between 0 - 23)
let minutes = date.getMinutes(); // get minute from date object
let seconds = date.getSeconds(); // get second from date object
let ms = date.getMilliseconds(); // get milisecond from date object
*/
/*
date.setFullYear(2024); // set year
date.setMonth(11); // set month
date.setDate(31); // set day of month
date.setHours(23); // set hour
date.setMinutes(1); // set minute
date.setSeconds(30); // set second
date.setMilliseconds(0); // set millisecond
*/

date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = date;

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${month}/${day}/${year}`;
}
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}
