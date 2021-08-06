export class Account{

    client;
    account;
    agency;

    #balance = 0; //private atribute

    withdraw(value){
        if (this.#balance < value){
            return
        }else{
            this.#balance -= value;
            return value;
        }
    }

    depposit(value){
        if(value <= 0){
            return;
        }else{
            this.#balance += value;
            return value;
        }
    }

    transfer(value, account){
        const money = this.withdraw(value)
        account.depposit(money)
    }
}