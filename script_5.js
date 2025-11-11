console.log('=== 1 ===')

const prices = {apple: 5, banana: 3, orange: 7};
const sum = Object.values(prices).reduce((acc, price) => acc + price);
console.log(sum);


console.log('=== 2 ===')

const users = [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Eve'},
];
//TODO получить новый объект, где: ключом будет id, значением — name.
// {1: 'Ann', 2: 'Bob', 3: 'Eve'}

const newUsers = users.reduce((acc, user) => ({
    ...acc, [user.id]:user.name
}), {});
console.log(newUsers);

console.log('=== 3 ===')

const people = [
    {name: 'Ann', age: 17},
    {name: 'Bob', age: 22},
    {name: 'Kate', age: 18},
    {name: 'Paul', age: 12},
    {name: 'Ann', age: 17}
];
//TODO Нужно разделить людей на две группы: "kids" — младше 18, "adults" — 18 и старше.
// kids: [{name: 'Ann', age: 17}]
// adults: [{ name: 'Bob', age: 22 },{ name: 'Kate', age: 18 }]

const groupedPeople = people.reduce((acc, person) => {
    const key = person.age >= 18 ? 'adults' : 'kids';
    return {
        ...acc, [key]: [...(acc[key] || []), person]
    };
}, {});
console.log(groupedPeople);

console.log('=== 4 ===')

const staff = [
    {name: 'Ann', role: 'dev'},
    {name: 'Bob', role: 'qa'},
    {name: 'Eve', role: 'dev'},
];
//TODO Нужно посчитать, сколько сотрудников выполняют каждую роль.

const totalRoles = staff.reduce((acc, person) => {
    const sumRoles = acc[person.role] ? ++acc[person.role] : 1;
    return {
        ...acc, [person.role]: sumRoles
    };
}, {});
console.log(totalRoles);

console.log('=== 5 ===')

const names = ['Ann', 'Bob', 'Eve', 'Alice', 'Brian'];
//TODO Нужно сгруппировать их по первой букве.

const groupedFirstSymbol = names.reduce((acc, person) => {
    const sym = person[0]
    return {
        ...acc, [sym]: [...(acc[sym] || []), person]
    };
}, {});
console.log(groupedFirstSymbol);

console.log('=== 6 ===')

const fragments = [
    {a: 1, b: 2},
    {b: 3, c: 4},
    {c: 5, d: 6},
];
//TODO Нужно «собрать» из них один общий объект, где объединены все поля.
// result = {a:1, b:3, c:5, d:6}

const totalFragments = fragments.reduce((acc, person) => {
    const frag = Object.entries(person);
    return {
        ...acc, [frag[0][0]]: frag[0][1], [frag[1][0]]: frag[1][1]
    };
}, {});
console.log(totalFragments);


console.log('=== 7 ===')

const people2 = [
    {name: 'Ann', age: 20},
    {name: 'Bob', age: 30},
    {name: 'Eve', age: 40},

];
//TODO посчитать { totalAge, count, avg }.

const infoPeople2 = people2.reduce((acc, person) => {
    return {
        totalAge: acc.totalAge += person.age,
        count: ++acc.count,
        avg: `${(acc.totalAge / acc.count).toFixed(2)}`
    }
}, {
    totalAge: 0,
    count: 0,
    avg: 0
});
console.log(infoPeople2);