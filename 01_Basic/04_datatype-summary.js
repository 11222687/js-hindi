//primitive
//7 type:- String, Boolean, Number, null,undefine,Symbol, BigInt

const score=100;
const scoreValue=100.89;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);

const bigNumber=2345667224354876677n;
console.log(bigNumber);

//Reference and non-primitive

//Array, Object, Functions

const heros=["saktiman" ,"naagraj" ,"doga"];

{
    name: "Rahul"
    age: 23
    rollno: 11222687
}

const myFunction=function(){
    console.log("hello world");
    

}
//console.log(myFunction);
console.log(typeof heros);
console.log(typeof bigNumber);
console.log(typeof id);

// typeof Operator Result
// https://262.ecma-international.org/5.1/#sec-11.4.3