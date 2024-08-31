// string Slice-split-Join-Concat-includes

// slice

const country = "bangladesh"
const part = country.slice(2, 5)
console.log(part);
console.log(typeof country)

// split
// vhag kore jeta ekhane ase - like space 
const sentence = "i am working so hard"
//output turn to an array 
console.log(sentence.split(" "));
console.log(sentence.split('a'))


// joint

const a = ["a", 'b','c', 'd', 'e' ]
console.log(a.join('/'))

// includes

console.log(a.includes('c'))