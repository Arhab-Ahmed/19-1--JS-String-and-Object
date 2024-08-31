const person ={
    age: 80,
    salary: 25000,
    name: "hala choudhory",
    "work At": 'developer',
    isOld: true

}


// dot notation
// person.salary = 3000;

// console.log(person.salary)

// bracket notation
person['salary'] = 3000;
person['work At'] = 'driving';
// console.log(person['work At'])

// acess object property by another var named of that
// string er moddhe property r maan
const keyword = 'salary';

// judi "" er vhitore thake tahole property dekhai
// na thakle maan khuje niye dekhai
console.log(person[keyword])

// update value
const propName = 'name'
person[propName] = 'khuddus mia'
// 
console.log(person[propName])