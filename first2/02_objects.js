// Object Literals
const mySym = Symbol("Key1")
const JsUser ={
    name:"Hidayat",
    age:22,
    "full name": "Md Hidayat",
    [mySym]:"mykey1",
    location:"Delhi",
    email:'mdhidayat78@gmail.com',
    isLoggedIn:false,
    lastLoginDays:["Monday", 'TuesDay']
}
// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);

// Object.freeze(JsUser);
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hellow Js user")
}
JsUser.greeting2 = function(){
    console.log(`Hellow Js user ${this["full name"]}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());