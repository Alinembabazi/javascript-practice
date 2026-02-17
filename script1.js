function atmTransaction(transactionType, amount, balance){

let newBalance = balance;
let message = "",

switch(transactionType)
{
    case "withdrawal":
    if (amount <= 0) {
        return "Invalid Amount"
    }
    if (amount > balance ){
return "Insufficience balance"
    }
newBalance = balance - amount;
message = "withdrow successful .New Balance: " + newBalance;
break;

case "Deposit":
    if (amount<=0){
        return "Invalid AAmount"
    }
    newBalance = balance + amount;
    message ="Deposit successful. New Balance:"+newBalance;
    break;
default :
return "Invalid Transaction Type";
    }
