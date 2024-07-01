import { classNames } from './classNames';

describe('className', () => {
  test('width only first param', () => {
    expect(classNames('class')).toBe('class');
  });

  test('width additional class', () => {
    expect(classNames('class', {}, ['class1', 'class2']))
      .toBe('class class1 class2');
  });

  test('width mods', () => {
    expect(classNames('class', { hovered: true, color: true }, ['class1']))
      .toBe('class class1 hovered color');
  });

  test('width mods false', () => {
    expect(classNames('class', { hovered: true, color: false }, ['class1']))
      .toBe('class class1 hovered');
  });
});
