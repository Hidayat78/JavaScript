const user={
    userName:"Hidayat",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.userName="Chaman"
// user.welcomeMessage()
// console.log(this);

// function hidde(){
//     let username="Hidayat"
//     console.log(this.username) //this can't use in function
// }
// hidde();
// let hidde = function(){
//     let userName= 'Hidayat'
//     console.log(this.userName);
// }
// hidde();
// let hidde =()=>{
//     let userName= 'Hidayat'
//     console.log(this.userName);
// }
// hidde();

//arrow function
//const addTwo=(num1, num2)=>{
//    return num1+num2
//}
// console.log(addTwo(3,4));

//implicit Arrow function
// const addTwo=(num1, num2)=> num1+num2
// const addTwo=(num1, num2)=> (num1+num2)
const addTwo=(num1, num2)=> ({Name:"Hidayat"})

console.log(addTwo(3,4));