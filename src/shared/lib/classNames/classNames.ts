type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className),
  ].join(' ');
}

// Cls - строка, представляющая основной CSS класс.
// Mods - объект, где ключи представляют различные модификаторы CSS класса,
// а значения - булевы или строковые, указывают должен ли быть применен этот модификатор.
// Additional - массив строк, представляющий дополнительные CSS классы,
// которые нужно добавить к основному cls.

// mods фильтруется, оставляя только те, у которых значение -
// true или строчное значение не являющееся пустой строкой
// и добавляются к результирующей строке классов.

// Метод Object.entries() преобразует свойства объекта в массив,
// содержащий массивы пар ключ-значение этого объекта.
// const obj = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(obj);  Результат: [['a', 1], ['b', 2], ['c', 3]]
