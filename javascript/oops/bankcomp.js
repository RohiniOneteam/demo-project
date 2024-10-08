// Parent class: BankAccount
class BankAccount {
    constructor(accountHolder, balance = 0) {
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    // Deposit method
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${amount} deposited. New balance: ${this.balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    // Withdraw method
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} withdrawn. Remaining balance: ${this.balance}`);
      } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
      }
    }
  
    // Check balance method
    checkBalance() {
      console.log(`Account holder: ${this.accountHolder}, Balance: ${this.balance}`);
    }
  }
  
  // Child class: SavingsAccount (inherits from BankAccount)
  class SavingsAccount extends BankAccount {
    constructor(accountHolder, balance, interestRate) {
      super(accountHolder, balance); // Call the parent class constructor
      this.interestRate = interestRate; // Add interestRate specific to SavingsAccount
    }
  
    // Method to add interest
    addInterest() {
      const interest = this.balance * this.interestRate / 100;
      this.balance += interest;
      console.log(`Interest added: ${interest}. New balance: ${this.balance}`);
    }
  }
  
  // Child class: CheckingAccount (inherits from BankAccount)
  class CheckingAccount extends BankAccount {
    constructor(accountHolder, balance, overdraftLimit) {
      super(accountHolder, balance); // Call the parent class constructor
      this.overdraftLimit = overdraftLimit; // Add overdraftLimit specific to CheckingAccount
    }
  
    // Override the withdraw method for overdraft functionality
    withdraw(amount) {
      if (amount > 0 && (this.balance + this.overdraftLimit) >= amount) {
        this.balance -= amount;
        console.log(`${amount} withdrawn. Remaining balance: ${this.balance}`);
      } else {
        console.log("Withdrawal exceeds overdraft limit or invalid amount.");
      }
    }
  }
  
  // Example usage
  const johnSavings = new SavingsAccount("John Doe", 1000, 5);
  johnSavings.checkBalance(); // Account holder: John Doe, Balance: 1000
  johnSavings.deposit(500); // 500 deposited. New balance: 1500
  johnSavings.addInterest(); // Interest added. New balance: 1575
  johnSavings.withdraw(300); // 300 withdrawn. Remaining balance: 1275
  
  const janeChecking = new CheckingAccount("Jane Doe", 500, 200);
  janeChecking.checkBalance(); // Account holder: Jane Doe, Balance: 500
  janeChecking.deposit(300); // 300 deposited. New balance: 800
  janeChecking.withdraw(900); // 900 withdrawn. Remaining balance: -100 (within overdraft limit)
  janeChecking.withdraw(200); // Withdrawal exceeds overdraft limit or invalid amount.
  