import { soma, subtracao } from "../../src/module/calculator"

test('soma 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('subtração 1 - 2 to equal -1', () => {
    expect(subtracao(1, 2)).toBe(-1);
});