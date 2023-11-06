import { BankAccount } from "./BankAccount";

export class YieldAccount extends BankAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): number => {
        let balance = this.balance
        //polimorfismo 1/2 - alterar assinatura/fluxo do método
        if(this.validadeStatus()){
            this.balance = balance + value + 10
            console.log('Voce depositou', value, '$')
        }
        return balance 
    }

} 