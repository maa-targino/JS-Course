import { Client } from "./Client.js";
import { Account } from "./Account.js";

const getAge = date => Math.floor((new Date() - new Date(date).getTime()) / 3.15576e+10)

const client01 = new Client
client01.id = "001"
client01.name = "Marco Targino"
client01.birthdate = '1996-12-10'
client01.age = getAge(client01.birthdate)

const account01 = new Account
account01._client = client01
account01.account = "00001"
account01.agency = "2476"

const client02 = new Client
client02.id = "002"
client02.name = "Beatriz Amorim"
client02.birthdate = '1998-09-14'
client02.age = getAge(client02.birthdate)

const account02 = new Account
account02._client = 0
account02.account = "00002"
account02.agency = "2476"

account01.depposit(750)
account01.transfer(500, account02)
account02.balance = 1209841209

console.log(account02)