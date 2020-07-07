class Bank{
static _nextNumber = 0;


    constructor(){
        this._account = [];
        this._accountNumers = 0;
        this._savingAccountNumbers = 0;
        this._checkingAccountNumbers = 0;
        
    }
    addAccount(){
        this._account.push(new Account(this._nextNumber++));
        return ++this._accountNumers;
    }
    addSavingAccount(interest){
        this._account.push(new SavingsAccount(this._nextNumber++, interest));
        return ++this._checkingAccountNumbers;
    }
    addCheckingAccount(overdraft){
        this._account.push(new CheckingAccount(this._nextNumber++, overdraft));
        return ++this._savingAccountNumbers;
    }
    closeAccount(number){
        if(this._account[number] !=null){
            if(this._account instanceof SavingsAccount) --this._savingAccountNumbers;
            else if(this._account instanceof CheckingAccount) --this._checkingAccountNumbers;
            else --this._accountNumers;
            delete this._account[number];
            return true
        }
        return false;
        

    }
    accountReport(){
        let result = "";
        for(let i = 0; i<this._account.length; i++){
            if(this._account[i] != null)
            result += this._account[i].toString()+ "\n";
        }
        return result;
    }
    endOfMonth(){

    }

}