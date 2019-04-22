/**
 * Создание персонажа
 *
 * @param {string} name - Имя персонажа
 * @param {string} type - Тип персонажа
 *
 * @throws Ошибка при неверном введении имени или типа персонажа
 */
function Character(name, type) {
  this.name = name;
  this.type = type;
}

export default Character;
