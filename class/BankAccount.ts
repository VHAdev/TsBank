export abstract class BankAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor (name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {  //exemplo de ''seters'' vão configurar(setar), métodos para alterar valor de propriedades
        this.name = name
        console.log('Nome alterado')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (value: number): number => {
        let balance = this.balance
        //polimorfismo 1/2 - alterar assinatura/fluxo do método
        if(this.validadeStatus()){
            this.balance = balance + value
            console.log('Voce depositou', value, '$')
        }
        return balance 
    }

    withdraw = (value: number): number => {
        
        let balance = this.balance
        if(this.validadeStatus() && balance > value){
            this.balance = balance - value
            console.log('Voce sacou', value, '$')
        } else console.log('Saldo insuficiente para saque')
        return balance
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    public validadeStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta invalida')
    }
}