const conta = {
    email: 'v@bank.me',
    password: '1223334444',
    name: 'Vitor Hugo',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(conta)
    }, 3000)
})