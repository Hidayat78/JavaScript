// function varTest() {
//     var x = 1;
//     {
//       var x = 2; // same variable!
//       console.log(x); // 2
//     }
//     console.log(x); // 2
//   }
  
//   function letTest() {
//     let x = 1;
//     {
//       let x = 2; // different variable
//       console.log(x); // 2
//     }
//     console.log(x); // 1
//   }
//   const accountId = 144553
// let accountEmail = "h@google.com"
// var accountPassword = "12345"
// accountCity = "Delhi"
// let accountState;

// accountId = 2 // not allowed


// accountEmail = "hidayat@x.com"
// accountPassword = "007007007"
// accountCity = "Bengaluru"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// let score ="43"
// console.log(typeof score);
// console.log(typeof (score));
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// "33"=> 33
// "33abc" => NaN
// true=> 1 false 0
// ""=> flase ; "hdt"=> true

let someNumber = 45;
let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// let str1 = "heloow"
// let str2 = " Hidayat"
// let str3 = str1 + str2;
// console.log(str3);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hidayat",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3