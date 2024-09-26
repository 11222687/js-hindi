
let myStr="hello ! this is a REGULAR 69 EXPRESSION";
let myEmailStr="hello@test.com"
//regular expression are define /search element/
let myReguExp1=/a/;
let myReguExp2=/[0-7]/;
let myReguExp3=/[a-z]/;
let myReguExp4=/[A-Z]/;
let myEmailTest=/[a-z]@[a-z].[a-z]/;
console.log(myStr.search(myReguExp1));
console.log(myStr.search(myReguExp2));
console.log(myEmailStr.search(myEmailTest));

// String search
function stringSearch(string,pattern){
let count=0;
for(let i=0;i<=string.length-pattern.length;i++){
    let match=true;
    for(let j=0;j<pattern.length;j++){
        if (pattern[j] !=string[i+j]){
            match=false;

        break;
        }
    }
    if(match) count++;
}
return count;
}

let inputStr="helloworllodllo"
let searchPattern='llo'
console.log(stringSearch(inputStr,searchPattern));
