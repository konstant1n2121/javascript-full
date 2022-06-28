import importType from 'eslint-plugin-import/lib/core/importType';
import { reverseArray, withdraw, getAdults } from '.';
it('должен возвращать массив чисел перевернутий', () => {
  const result = reverseArray([1, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 1]);
});

it('если передан не массив то будет null', () => {
  const result = reverseArray();
  expect(result).toEqual(null);
});

it('если пустой массив то результат будет пустой массив', () => {
  const result = reverseArray([]);
  expect(result).toEqual([]);
});

it('если на балансе меньше денег, вернуть -1', () => {
  const result = withdraw(['Andrei', 'Costel', 'Alina'], [1000, 40, 70], 'Alina', 100);
  expect(result).toEqual(-1);
});

it('если на балансе достаточно денег, вернуть остаток', () => {
  const result = withdraw(['Andrei', 'Costel', 'Alina'], [1000, 40, 70], 'Andrei', 500);
  expect(result).toEqual(500);
});

it('если баланс и сумма сняття совпадают, вернуть 0', () => {
  const result = withdraw(['Andrei', 'Costel', 'Alina'], [1000, 40, 70], 'Costel', 40);
  expect(result).toEqual(0);
});

it('если возраст подходящий, показать имя и возраст', () => {
  const result = getAdults({ Tom: 25, Jane: 12, Eric: 14 });
  expect(result).toEqual({ Tom: 25 });
});

it('если не подходят параметры вернуть пустой обьект', () => {
  const result = getAdults({ Tom: 16, Jane: 12, Eric: 14 });
  expect(result).toEqual({});
});
