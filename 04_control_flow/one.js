//if
// const isUserLoggedIn= true
const temperature =  14
// if(temperature < 32){
// console.log("Winter sessio")
// }else{
//     console.log("Summer session")
// }
// < lessthan , > geater than, <= less than equalto, != not equal,

let score = 200;
// if (score > 100){
//     let power =  "Fly"
//     console.log(`User Power ${power}`)
// }
// console.log(`User Power ${power}`)

// const balance = 1000;
// if(balance >500) console.log(" hai nikal lo");

// if(balance < 500){
// console.log("Less than")
// }else if(balance < 750){
//     console.log("Less than 750")
// }else if(balance < 900){
//     console.log("balnce less than 900")
// }else{
//     console.log(` less than 1200`);
// }

const isUserLoggedIn=true
const debitCard = true
const loggedInFromGoogle= false
const loggedInFomEmail = true 
if(isUserLoggedIn && debitCard){  // and all should be true
console.log("allow user")
}
if(loggedInFomEmail || loggedInFromGoogle){   // koi  v sahi ho or
    console.log("User Logged In")
}

// Nullish Coalessing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1  = null ?? 10
val1 = undefined ?? 20
console.log(val1)

// Ternory operator
// conditions? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")