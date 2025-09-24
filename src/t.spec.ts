import { describe, it, expect } from 'vitest'

function Soma(a: number, b: number) {
  return a + b
}


describe('Soma', () => {
  it('deve retornar a soma de dois números positivos', () => {
    expect(Soma(2, 3)).toBe(5)
  })
})
