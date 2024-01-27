// singleton objects here
//const tinderUser=new Object()

const tinderUser={}

tinderUser.id="1234abc"
tinderUser.name="Riju"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userFname:{
            Fname:"Riju",
            Lname:"Ghosh"
        }
    }
}

console.log(regularUser.fullname.userFname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2} //  will make a object with 2 different objects not join them
const obj4=Object.assign({},obj1,obj2) // this will combine all given objects to one
console.log(obj4);


const obj5={...obj1,...obj2} // this will also combine objects to 1 new objects
console.log(obj5);

const user=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"abc@gmail.com"
    },
    {
        id:3,
        email:"abc@gmail.com"
    }
]
user[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:name}=course  //destructuring of objects

//console.log(courseInstructor);
console.log(name);

//API JSONs

// structure of JSON
// {
//     "name":"riju",
//     "roll":"133",
//     "cost":"free"
// }