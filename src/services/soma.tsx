export const soma = (num: number): number => {
    return num + 1
}

export const mult = (num: number, mnum: number): number | string => {
    if(mnum === 2 || mnum === 3) {
        return num * mnum
    }

    return 'Deu erro, multiplicador inválido mano'
}