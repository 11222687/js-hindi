let str='javaScript'
//finding the length of the String
let len=str.length
console.log("the lrngth of the String is: " +len);


//2nd days
// declare of the String
const gameName=new String('rahul-jaik');
console.log(gameName);

console.log(gameName.toUpperCase);
//find the length of the String
console.log(gameName.length);
//find the char are which position
console.log(gameName.charAt(2));
//find the char are which position to come
console.log(gameName.indexOf('l'));

const newString=gameName.substring(0 ,4);
console.log(newString);

const anotherString=gameName.slice(-3,4);
console.log(anotherString);

// trim=remove staring and ending unwanted space
const newString1="    rahul   ";
console.log(newString1);
console.log(newString1.trim());

//replace
const url='https:rahuljaikar%20chaurasiya';
console.log(url.replace('%20' , '-'));

console.log(url.includes('rahul'));

//split
console.log(gameName.split('-'));



let name='rahul';

let repoCount=50;

// this method is bad habbit
//console.log(name +" "+ repoCount );

console.log(` hi, my name is ${name} and my repo count is ${repoCount}`);

