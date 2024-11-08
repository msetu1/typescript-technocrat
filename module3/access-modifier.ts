{
  ///
  // access modifiers
  // notes :
  // 1. readonly,2. public, 3.private,4.protected

  class BankAccount {
    readonly id: number;
    private _balance: number;
    protected _myBalance: number;
    public bankName: string;

    constructor(id: number, balance: number, bankName: string,_myBalance: number) {
      this.id = id;
      this._balance = balance;
      this.bankName = bankName;
      this._myBalance= _myBalance;
    }
    addBalance(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

//   protected 
class Student extends BankAccount{
    test(){
      this.
    }
    
}

  const myAccount = new BankAccount(1212, 100, "sunaliybank",20);
  console.log(myAccount.id);
  myAccount.addBalance(200);
  console.log(myAccount.getBalance());

  ///
}
