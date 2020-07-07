class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
    addInterest(){
        var interestAmount = this.getBalance()*this._interest/100;
        super._balance = this.getBalance() + interestAmount;
        //sreturn this._interest + super.getBalance();
    }
    getInterest(){
        return this._interest;
    }
    setInterest(){
        this._interest=this.interest;
    }
    toString(){
        return "Saving Account Balance " + this.getBalance();
        
    }
    endOfMonth(){
        this.addInterest();
        return
        
    }
}