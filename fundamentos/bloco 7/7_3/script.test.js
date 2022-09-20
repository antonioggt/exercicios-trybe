const sum = require("./script");

test("Se um dos parametros não for um numero: erro", () => {
    expect(() => {
        sum("4",5);
    }).toThrow();
});

test("Soma dois valores", () => { 
    expect(sum(4, 5)).toBe(9);
});

