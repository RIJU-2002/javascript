//Dates

let myDate=new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate.toDateString());

let myCreatedDate1=new Date("12-03-2014");
console.log(myCreatedDate1.toDateString());

//to compare a date with today

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));// in  seconds

let newDate=Date.now()
newDate.toLocaleString('default',{
    weekdays:'long',
})