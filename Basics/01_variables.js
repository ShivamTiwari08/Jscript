const accountId = 144553
let accountEmail = "tiwari@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "ragnarok@rc.com"
accountPassword = "98765"
accountCity = "Pune"
let account_State;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, account_State]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
