const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// const allHeros=marvel_heros.concat(dc_heros)  // "concat" returns a new array
// marvel_heros.push(dc_heros)  //push just updates the array
// console.log(marvel_heros);

const all_new_heros=[...marvel_heros,...dc_heros]  // spread operator of array
console.log(all_new_heros);

const complex_array=[1,2,3,4,[5,6,7],[8,9,10,[11,12,13]],14]
const simple_array=complex_array.flat(Infinity) // flat operator concats all arrays inside arrays in one plain array and return it as a new array
console.log(simple_array);


console.log(Array.isArray("Riju"));  //returns if the the given data is array or not
console.log(Array.from("Riju"));     // returns the given data as array
console.log(Array.from({name:"Riju"})); // returns an empty array as key value pair cannot be made array without giving other inputs


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));  //'of' operator helps to make arrays from given variables
