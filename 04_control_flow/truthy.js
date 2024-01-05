const userEmail= []
if(userEmail){
    console.log("userLoged in")
}else{
    console.log("Don't have email id")
}

// falsy values
// false, 0, -0, BigIn 0n, null, undefined, NaN, ""

// truthy
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empyty")
}