// for of
// ["", "",""]
//[{},{},{}]

// const arr=[1,3,4,5,6,6,8]
// for(const num in arr){
//     console.log(num)
// }
// const arr=[1,3,4,5,6,6,8]
// for(const num of arr){
//     console.log(num)
// }
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);
for(const [key, value] of map){
    // console.log(key, ':-', value)
}
const myObj={
    game:'Nfs',
    Yochina:'Noodles'
}
// for(const [key, value] of myObj){
//     console.log(key, ':-', value)
// }