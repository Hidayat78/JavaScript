// Immediately Invoked Function Expressions (IIFE)


(function hidde(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hidayat')