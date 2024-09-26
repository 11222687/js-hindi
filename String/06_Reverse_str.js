function reverseString(inputStr){
    let reversedString= " ";
    for(let i=inputStr.length-1;i>=0;i--){
        reversedString +=inputStr[i];
    }
    return reversedString;
}
console.log(reverseString("hello"));
