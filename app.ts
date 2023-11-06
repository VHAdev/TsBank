import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { YieldAccount } from './class/YieldAccount'

const peopleaccount: PeopleAccount = new PeopleAccount(1, 'V', 10)
console.log(peopleaccount)
peopleaccount.deposit(100)
peopleaccount.withdraw(90)
console.log(peopleaccount)


// const companyaccount: CompanyAccount = new CompanyAccount('V', 2)
// companyaccount.getLoan(500)
// console.log(companyaccount)


// const yieldaccount: YieldAccount = new YieldAccount ('V', 3)
// yieldaccount.deposit(50)
// console.log(yieldaccount)
