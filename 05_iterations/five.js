const coding= ["js", "Rubi", "Pythonn","Hdt"]
// coding.forEach(function(val){
//     console.log(val)
// })
// coding.forEach((vak)=>{
//     console.log(vak)
// })

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )