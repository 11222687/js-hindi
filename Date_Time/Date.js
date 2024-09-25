// Date and time

let myDate=new Date();
console.log("toString");

console.log(myDate.toString());
console.log("toDateString");

console.log(myDate.toDateString());
console.log("toISOString");

console.log(myDate.toISOString());
console.log("toJSON");

console.log(myDate.toJSON());
console.log("toLocalDateString");

console.log(myDate.toLocaleDateString());
console.log("toLocaleString");

console.log(myDate.toLocaleString());
console.log("toLocaleTimeString");

console.log(myDate.toLocaleTimeString());

//date is an objecct
console.log(typeof myDate);

let createDate=new Date(2024,8,26);
console.log(createDate.toDateString());

let createDate1=new Date(2024,8,26,1,9);
console.log(createDate1.toLocaleString());

let createDate2=new Date("2024-01-14")
console.log(createDate2.toLocaleString());

let createDate3=new Date("01-14-2024");
console.log(createDate3.toLocaleString());

//time Stamp=compare the time in ques
let myTimeStamp=Date.now();
console.log(myTimeStamp);
//compare the time betwen myTimeStamp and CreateDate3
console.log(createDate3.getTime());

//convert in sec
console.log(Math.floor(Date.now()/1000));


let newDate=new Date(); 
console.log(newDate);

newDate.toLocaleString('default',{
weekday: "long"
})
//console.log(newDate);
 let date=new Date();
 console.log(`the date is ${date.getDate()} and the time is ${date.getTime()} and day is ${date.getDay()}`);
 