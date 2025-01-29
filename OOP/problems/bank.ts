// Bank account balance
// create a typescript class bankaccount with a private property_balance intialized to 0.
// implement a getter method balance that return current balance.
// implement a setter method balance that updates the balance if the new value is non negative otherwise, log an error message.
// Instatiate an object of the bankaccount class.
// use the setter to set the balance to 1000 and use the getter to display the uodated balance.
// try setting a negative balance using the setter. what output do you expect.

class BankAccount{
  private _balance:number=0;

  public get balance():number{
    return this._balance;
  }
  public set balance(newBalance:number){
    if(newBalance<0)
    {
      throw new Error("invalid balance");
    }
    this._balance=newBalance;
  }
}
const account=new BankAccount();
account.balance=-10;
console.log(account.balance)