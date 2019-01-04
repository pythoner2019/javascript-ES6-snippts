// This is not array .. this is called rest operator :) 
const addNumbers = (...numbers) => {
   return numbers.reduce((sum, number) => {
      return sum + number
   }, 0)
}

console.log(addNumbers(1, 2, 3, 4, 5, 6));

// --------------------//
// here is the spread operator

const loveColors = ['red', 'green'];
const hateColors = ['blue', 'black'];

const allColors = ['yellow', ...loveColors, ...hateColors];
console.log(allColors)
// this is new list of all colors added to each others...

//------------------------------------------------//
// rest and spread together

const validateShoppingList = (...items) => {
   if (items.indexOf('milk') < 0) {
      return ['milk', ...items]
   } else {
      return items
   }
}

console.log(validateShoppingList('eggs', 'bread', 'oranges'));

//------------------------------------------------//

// Very important :::  
// to prevent duplicate the logic in objects methods -- uses rest and spread operators..

const mathLibrary = {
   calculateProduct(...rest) {
      return this.multiply(...rest);
   },
   multiply(a, b) {
      return a * b;
   }
};


console.log(mathLibrary.calculateProduct(4, 4))



























