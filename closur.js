/* const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return balance;
    }
} */
const bank = owner => {
    balance = 0;
    return {
        diposite:amount => {
            // balance = balance + amount;
            balance += amount;
            return balance;
    },
        withdrow:amount => {
            // balance = balance - amount;
            balance -= amount;
            return balance;
    }
    }
}

const yourBank = bank('youracount')
console.log(yourBank.diposite(100))
console.log(yourBank.diposite(200))
console.log(yourBank.balance)
console.log(yourBank.diposite(500))
console.log(yourBank.withdrow(500))