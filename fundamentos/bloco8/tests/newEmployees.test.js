
const { newEmployees, newObj } = require("../newEmployees");

describe(' testa a HoF newEmployees e o callback newObj ', () => {
    test('', () => {
        const id1 = ['id1', { NomeCompleto: 'Pedro Guerra', email: 'pedroguerra@trybe.com' }]
        const id2 = ['id2',{ NomeCompleto: 'Luiza Drumond', email: 'luizadrumond@trybe.com' }]
        const id3 = ['id3',{ NomeCompleto: 'Carla Paiva', email: 'carlapaiva@trybe.com' }]
        expect(Object.entries(newEmployees(newObj))[0]).toStrictEqual(id1)
        expect(Object.entries(newEmployees(newObj))[1]).toStrictEqual(id2)
        expect(Object.entries(newEmployees(newObj))[2]).toStrictEqual(id3)
    })
});