//singleton => are made using constructor
//Objects.create  => this makes a singleton object


//object literals

const mySym=Symbol("Keys")

const Juser={
    name: "Riju",
    age:18,
    [mySym]:"mySym1", // in this may symbols are used in an object
    location:'Jaipur',
    email:"abc@gmail.com",
    isLoggin:false,
    lastLogegdinDays:["Mondays","Saturday"]
}

console.log(Juser.email);  //cannot be used if the keys are string type
console.log(Juser['email']); //if the key is a string we have to use this method to get the value from the key
//Object,freeze(Juser)   => is used to make no changes in the object
console.log(Juser[mySym]);

console.log(Juser);

Juser.greeting=function(){
    console.log("Hello js user");
}

console.log(Juser.greeting());

Juser.greeting2=function(){
    console.log(`Hello  JS user, ${this.name}`);
}
console.log(Juser.greeting2());