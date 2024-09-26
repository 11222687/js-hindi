//method to replace String
//replace() , split() and join() method

//replace("searchString","replaceString")
let myStr="AForApple";
let myStr1="A,For,Apple";
let replacedStr=myStr.replace("Apple","Aam");
console.log(replacedStr);

//split("splitSyntax")
let replacedStr1=myStr.split("For");
let replacedStr2=myStr.split(",")
console.log(replacedStr1);
console.log(replacedStr2);
 let myStr4="himynameisRahul";
 let replacedStr4=myStr4.split("Rahul").join("Navin");
 console.log(myStr4);
 console.log(replacedStr4);
 