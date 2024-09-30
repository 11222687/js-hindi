// advance level
const marvel_heros=["rahul","sanjeet bosada","sandip"];
const dp_heroes=["arif","bikash","shivam"];

//here push elemement dp_heros in marvel_heroes index
marvel_heros.push(dp_heroes);
//console.log(marvel_heros);

const all_heros=marvel_heros.concat(dp_heroes);
//console.log(all_heros);

//speard 
const all_super_heroes=[...marvel_heros,...dp_heroes]
console.log(all_super_heroes);

//flat =flat print array in array
const another_arr=[1,2,3,[4,5],6[7,8,[9]]];
const real_arr=another_arr.flat(Infinity);
console.log(real_arr);
