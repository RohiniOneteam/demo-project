function BankAccount(accountHolder,balance=0){
    this.accountHolder=accountHolder
    this.balance=balance ||0
}

BankAccount.prototype.deposit=function(amount){
    if(amount>0){
        this.balance+=amount
        console.log(`${amount} deposited,and new bal is :${this.balance}`)
    }else{
        console.log("Deposit amount must be positive ")
    }
}


BankAccount.prototype.withdraw=function(amount){
    if (amount>0 && amount<=this.balance){
        this.balance-=amount
        console.log(`${amount} withdrawn .remaining balance :${this.balnace}`)
    }
    else{
        console.log("insufficient funds")
    }

}

BankAccount.prototype.checkBalance = function() {
    console.log(`Account holder: ${this.accountHolder}, Balance: ${this.balance}`);
  };

// ------------------------------------------------------------------------------

function SavingsAccount(accountHolder,balance,interestrate){
    BankAccount.call(this,accountHolder,balance)
    this.interestrate=interestrate
}

// Inherit methods from BankAccount prototype

SavingsAccount.prototype=Object.create(BankAccount.prototype)
SavingsAccount.prototype.constructor=SavingsAccount

SavingsAccount.prototype.addInterest = function() {
    const interest = this.balance * this.interestRate / 100;
    this.balance += interest;
    console.log(`Interest added: ${interest}. New balance: ${this.balance}`);
  };
// -----------------------------------------------------------

function CheckingAccount(accountHolder, balance, overdraftLimit) {
  BankAccount.call(this, accountHolder, balance); // Inherit properties
  this.overdraftLimit = overdraftLimit;  // New property for CheckingAccount
}


// Inherit methods from BankAccount prototype
CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;


CheckingAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && (this.balance + this.overdraftLimit) >= amount) {
      this.balance -= amount;
      console.log(`${amount} withdrawn. Remaining balance: ${this.balance}`);
    } else {
      console.log("Withdrawal exceeds overdraft limit or invalid amount.");
    }
  };



const john=new SavingsAccount("john",1000,5)
john.checkBalance()
john.deposit(500)
john.addInterest()
john.withdraw(300)
john.checkBalance()

console.log("---------------------------------")

const jude=new CheckingAccount("jude",500,200)
jude.checkBalance()
jude.deposit(300)
jude.withdraw(900)
jude.withdraw(200)
