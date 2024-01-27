//functions

function sayMyName(){
    console.log("hello");
}

// sayMyName()

// function add(number1,number2){ // this are parameters
//     console.log(number1+number2)
// }

function add(n1,n2){
    // let result=n1+n2
    // return result
    return n1+n2
}

const x=add(5,2) // this are argument
console.log(x);


function loginUserMsg(username){
    if (username === undefined){
        console.log("Please enter a valid name");
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Riju")) // if no argument is passed then it will show 'undefined'