import { soma, mult } from './soma'
import { api } from "../api"

describe('soma', () => {
    it('deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o numero po dois', () => {
        const value = mult(2, 2)
        expect(value).toBe(4)
    })

    it('deve multiplicar o numero por 3', () => {
        const value = mult(2, 3)
        expect(value).toBe(6)
    })

    it('Deu erro, multiplicador inválido mano')
    const value = mult(2, 4)
    expect (value).toBe('Deu erro, multiplicador inválido')
})