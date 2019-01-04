const companies = [
   'google',
   'facebook',
   'Uber',
   'Nike'
];


// ES5
// var name1 = companies[0];
// console.log(name1);


// ES6    بالترتيب 
// const [name1, name2, name3] = companies;

// console.log(name1);
// console.log(name2)
// console.log(name3)

// ------------------------//
const [name1, name2, ...rest] = companies;

console.log(name1);
console.log(name2);
console.log(rest);