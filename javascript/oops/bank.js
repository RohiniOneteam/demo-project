class BankAccount{
    constructor(accountHolder,balance=0){
        this.accountHolder=accountHolder
        this.balance=balance
    }


    deposit(amount){
        this.amount=amount
        if (this.amount>0){
            this.balance+=this.amount
            console.log("successfully deposited  :",this.amount,"\n",
                "the New bal iss :",this.balance)
        }
        else{
            console.log("invalid amount ")
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount
            console.log(`Successfully withdrew ${amount}. Remaining balance: ${this.balance}`);
        }

        else if (amount>this.balance){
            console.log("insufficient bal")
        }

        else{
            console.log("invalid")
        }
            

    }


    checkBalance() {
        console.log(`Account holder: ${this.accountHolder}, Balance: $${this.balance}`);
    }
}












