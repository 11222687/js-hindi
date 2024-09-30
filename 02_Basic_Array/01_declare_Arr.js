// Array

const myArr=[0,1,2,3,4,5];
const myHeros=["Saktiman","naagraj"];

const myArr1=new Array(10,20,30,40,50);
console.log(myArr[0]);
console.log(myArr1[4]);

// Array method
// push=add element at last 
myArr.push(9);
console.log(myArr);

//pop=remove last element
myArr.pop();
console.log(myArr);

//unshift=add element at first
myArr.unshift(8);
console.log(myArr);

//shift=remove first element
myArr.shift();
console.log(myArr);

//includes=given answer in true/false
console.log(myArr.includes(5));

//indexof=find the value at on index
console.log(myArr.indexOf(3));

//join=convert all value in String and bytes
const newArr=myArr.join()
console.log(myArr)
console.log(newArr)

//slice/ splice
console.log("A",myArr);

const myN1=myArr.slice(1,3);
console.log(myN1);

console.log("B",myArr);

const myN2=myArr.splice(1,3);

console.log("c", myArr);
console.log(myN2);
