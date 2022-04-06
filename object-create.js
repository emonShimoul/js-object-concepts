// 1. using object literal
const student = {name: 'Sakib-Al-Hasan', job: 'Cricketer'};

// 2. object constructor
const person = new Object();
// console.log(person);

// 3.
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

// 4. from a class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manush', 12);
// console.log(peop);

// 5. from a function
function Manush(name){
    this.name = name;
}
const man = new Manush('Kader');
console.log(man);