
const { check, loteria } = require('../loteria');

describe('testa as funções check e loteria', () => {
    test('testa check', () => {
        expect(check(1, 1)).toBe('Parabéns você ganhou')
    })
    test('testa loteria', () => {
        expect(typeof loteria(3)).toBe('string')
        expect(typeof loteria('k')).toBe('undefined')
        expect(typeof loteria(true)).toBe('undefined')
        expect(typeof loteria(undefined)).toBe('undefined')
        expect(typeof loteria()).toBe('undefined')
        expect(typeof loteria(['oi', 2, 4])).toBe('undefined')
    })
});