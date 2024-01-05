function takemyName(){
    console.log('H')
    console.log('I')
    console.log('D')
    console.log('A')
    console.log('Y')
    console.log('A')
    console.log('T')
}
// takemyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumber(10,30);

function addTwoNumber(number1, number2){
const result = number1+number2
console.log("hhhhh") 
return result 
  
}
const result =addTwoNumber(5,6);
// console.log("Result", result);

// function loginUser(name){
//     return `${name} just logged in`
// }
// console.log(loginUser("Hidayat"));
// jb argument me kuch na jye to undefine aata hua console.log(loginUser());    undefine


// function loginUser(name){
//     if(name === undefined){
//         console.log("please enter user name");
//     }
//     return `${name} just logged in`
// }
// console.log(loginUser("H"));

function loginUser(name){
    if(!name){
        // console.log("please enter user name");
    }
    return `${name} just logged in`
}
// console.log(loginUser());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hidayat",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username: "chaman",
    price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]  // yha pr parameter se nam lo na ki genric
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));







