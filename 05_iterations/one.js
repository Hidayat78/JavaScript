// for loop
for(let i=0; i< 10; i++){
    const ele= i;
    // console.log(ele)    
}

for(let i=1; i<10; i++){
    // console.log(`Ouer Loops value ${i}`)
    for(let j=1; j<=10; j++){
        // console.log(`Inner  Loops ${j} value ${i}`)
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}
let myArray= ['flash', 'Batman', 'SuperMan'];
for(let i=0; i<myArray.length; i++){
    const ele = myArray[i]
    // console.log(ele)
}

// break and continue
// for(let i =0; i<= 20; i++){
//     if(i==5){
//         console.log("Dected 5")
//         break
//     }
//     console.log(`value of i is ${i}`)
// }
for(let i =0; i<= 20; i++){
    if(i==5){
        console.log("Dected 5")
        continue
    }
    console.log(`value of i is ${i}`)
}