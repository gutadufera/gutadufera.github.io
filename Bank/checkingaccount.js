class CheckingAccount extends Account{
    constructor(number, _overdraft){
        super(number);
        this._overdraft=-100;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(){
        this._overdraft = overdraft;
    }
    /**
     * 
     * @param {*} amount the amount withdrawn from the account
     */
    withdraw(amount) {
        let newBalance = this.getBalance() - amount;
        console.log(super.getBalance())
        if(newBalance>= this._overdraft) {  
            this._balance = newBalance;
        }
        else{
            console.log("Insufficient amount ");
            
        }
    }
    toString(){
        return "Checking account balance is " + this.getBalance();
    }
    endOfMonth(){
        
    }
}