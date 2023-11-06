import { BankAccount } from "./BankAccount"

export class CompanyAccount extends BankAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number): number => {
        let balance = this.balance
        if(this.validadeStatus()){
            this.balance = balance + value
            console.log('Voce pegou um empréstimo de', value, '$')
        }
        return balance
    }

    deposit = (): number => {
        return 2  // polimorfismo 2/2 - fluxo alterado, nova mensagem e valor atribuido
    }
}
