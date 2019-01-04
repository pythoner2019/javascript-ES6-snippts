let colors = ['red', 'green', 'black'];

// ES5
/*
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}
*/


// ES6 - forEach Helper Method >>>
colors.forEach(color => {
    console.log(color)
});

// -------------------------------------------------------------------------- //

let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

let adder = (number) => {
    sum += number;
}

numbers.forEach(adder);
// numbers.forEach((number) => {
//     sum += number;
// })

console.log(sum);















