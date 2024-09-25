//  *************Number***********

const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum=123.87968;
console.log(otherNum.toPrecision(4));

const hundred=1000000;
console.log(hundred.toLocaleString('en-In'));


// ********************Maths*******************
console.log(Math);

//abs=change neg to positive only
console.log(Math.abs(-9));

// round=print the round-up value
console.log(Math.round(6.9));
//ceil =print upper value
console.log(Math.ceil(8.3));
// floor=print lower case
console.log(Math.floor(7.9));
//min=find the minimum value
console.log(Math.min(3,8,7,9,1));

//max=find the maximum value
console.log(Math.max(9,6,7,8,3));

//random value=it's print random value between 0-1;
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random() * 10) +1);

const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max-min +1)) + min);
