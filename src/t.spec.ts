function Soma(a: number, b: number) {
  return a + b
}

import { describe, it, expect } from 'vitest'

describe('Soma', () => {
  it('deve retornar a soma de dois números positivos', () => {
    expect(Soma(2, 3)).toBe(5)
  })
})
