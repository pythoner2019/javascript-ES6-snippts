const expense = {
   type: 'Business',
   amount: '$45 USD'
};

// ES5
// const type = expense.type;
// const amount = expense.amount;
// console.log(type);

//===================================//
// ES6

const { type, amount } = expense;

console.log(type);
console.log(amount);