let d = new Date()
console.log(d);
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

let dd = d.getDate()
let mm = d.getMonth()
let yyyy = d.getFullYear()
console.log(`${dd} / ${mm+1} / ${yyyy}`);
// console.log(dd+" / "+mm+1+" / "+yyyy);

console.log(d.toLocaleString("en-US", {timeZone:"Asia/Dubai"}));
console.log(d.toLocaleString("en-US", {timeZone: "America/New_York"}));
console.log(d.toLocaleString("en-US", {timeZone: "Europe/London"}));