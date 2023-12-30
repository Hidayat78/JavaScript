function varTest() {
    var x = 1;
    {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  const accountId = 144553
let accountEmail = "h@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hidayat@x.com"
accountPassword = "007007007"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])