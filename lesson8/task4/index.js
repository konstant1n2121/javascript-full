const user = {
  name: "Tom",
  age: 17,
};

/* присвой объекту свойство hobby со значением 'football' с помощью точки */
user.hobby = "football";
const anotherKey = "married";
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
user[anotherKey] = false;
/* присвой объекту свойство 'favorite music' со значением 'rock' */
user["favorite misc"] = "rock";
/* присвой объекту свойство 'address', которое будет пустым объкетом */
user.addres = {};
/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
user.addres["country"] = "Ukraine";
/* присвой объекту в 'address' свойство 'building', со значением 17 */
user.addres["buiding"] = 17;
/* выведи в консоль итоговый объект user */

console.log(user);
