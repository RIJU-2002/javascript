const myArr=[0,1,2,3,4,5]


const myArr2=new Array(1,2,3,4,5)


//methods of array

// myArr.push(6)
// myArr.pop()

myArr.unshift(9) //to add an element in the start
myArr.includes(5) // => boolean output
myArr.indexOf(1) // => gives teh index of the given element

const newArr= myArr.join()

//slice and splice

console.log("A",myArr);

const myA1=myArr.slice(1,3)

console.log(myA1);

const myA2=myArr.splice(1,3)

console.log(myA2);

console.log(myArr);
console.log(newArr);
