const Calculator = require('../calculator');

describe('계산기 테스트', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('init', () => {
    expect(calculator.value).toBe(0);
  });

  test('set', () => {
    calculator.set(9);
    expect(9).toBe(9);
  });

  test('clear', () => {
    calculator.set(9);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  test('add', () => {
    calculator.set(1);
    calculator.add(1);
    expect(calculator.value).toBe(2);
  });

  test('add error test', () => {
    expect(() => {
      calculator.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  test('subtract', () => {
    calculator.subtract(1);
    expect(calculator.value).toBe(-1);
  });

  test('multiply', () => {
    calculator.set(1);
    calculator.multiply(2);
    expect(calculator.value).toBe(2);
  });

  describe('', () => {
    test('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    test('0 / 1 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });

    test('4 / 4 === 1', () => {
      calculator.set(4);
      calculator.divide(4);
      expect(calculator.value).toBe(1);
    });
  });
});
