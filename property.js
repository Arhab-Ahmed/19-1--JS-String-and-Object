const person ={
    age: 80,
    salary: 25000,
    name: "hala choudhory",
    "work At": 'developer',
    isOld: true

}
// dot notation
// dot sign diye object er property access kora 
console.log(person.salary);
const tk = person.salary
console.log(tk)

//erkom bhejailla ta dot notation diye access kora jai na
// eror

// console.log(person.work at) 

// tokhn access er jonno bracket notation use korte hobe

// bracket notation
// bracket diye object er property accesss kora
console.log(person['name']);
const nam = person.name
console.log(nam);

// bhejialla solve---
console.log(person["work At"]);
