import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { YieldAccount } from './class/YieldAccount'


const yieldaccount: YieldAccount = new YieldAccount ('V', 2)
yieldaccount.deposit(50)
console.log(yieldaccount)
