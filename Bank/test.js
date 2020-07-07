var saving = new SavingsAccount(1111, 2);
saving.deposit(100);
saving.addInterest();

var checking = new CheckingAccount(2222);
checking.deposit(2000);
checking.withdraw(1000);

var bank = new Bank();

// first saving account created
let savingAccountCount = 0;
savingAccountCount= bank.addSavingAccount(3);
var saving2 = bank._account[0];

saving2.deposit(100);
saving2.addInterest();

// second saving account created
savingAccountCount = bank.addSavingAccount(3);
var saving3 = bank._account[1];


saving3.deposit(100);
saving3.addInterest();

//create checking account

//first checking account
let checkingAccountCount = 0;
checkingAccountCount = bank.addCheckingAccount(-300);
var checking2 = bank._account[2];
checking2.deposit(1000);

//second checking account
checkingAccountCount = bank.addCheckingAccount(-300);
var checking3 = bank._account[3];
checking3.deposit(1000);

describe("check for savingAccount", function(){
    it("Interest added for saving account", function(){
        assert.equal(saving2.getBalance(), 103);
    });
    
    it("Check for checkingAccount withdraw Method", function(){
        assert.equal(checking.getBalance(), 1000);
    });

    it("Saving account created inside bank", function(){
        assert.equal(checkingAccountCount, 2);
    });
    
    it("Checking account created inside bank", function(){
        assert.equal(checking.getBalance(), 1000);
    });

    it("Clossed account of account number 0 inside  bank", function(){
        assert.equal(bank.closeAccount(0), true);
    });

    it("Account report list", function(){
        assert.equal(bank.accountReport(), "Saving Account Balance 103\nChecking account balance is 1000\nChecking account balance is 1000\n");
    });
})

