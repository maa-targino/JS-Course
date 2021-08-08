import { Client } from "./Client.js";

export class Account{
    account;
    agency;

    //private atributes
    _client;
    _balance; 

    set client(n){
        if(n instanceof Client){
            this._client = n;   
        }
    }

    get client(){
        return this._client
    }

    get balance(){
        return this._balance
    }

    withdraw(value){
        if (this._balance < value){
            return
        }else{
            this._balance -= value;
            return value;
        }
    }

    depposit(value){
        if(value <= 0){
            return;
        }else{
            this._balance += value;
            return value;
        }
    }

    transfer(value, account){
        const money = this.withdraw(value)
        account.depposit(money)
    }
}