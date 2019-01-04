//  ES5
/*
let numbers = [1, 2, 3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2)
}
console.log(doubledNumbers);
*/

//  ES6 ---   MAP helper method -- created new array ..
let numbers = [1, 2, 3];

let doubled = numbers.map((number) => {
    return number * 2;
})
console.log(doubled);

// --------------------------------------- //

const cars = [
    { model: 'Fiat', price: 'cheap' },
    { model: 'Mercedes', price: 'expensive' }
]

const prices = cars.map((car) => {
    return car.price;
})

console.log(prices);

//
const models = cars.map((car) => {
    return car.model;
})
console.log(models)

// --------------------------------------- //

const pluck = (array, property) => {
    const newArr = array.map((item) => {
        return item[property];
    })
    return newArr;
}


const points = [
    { color: 'red' },
    { color: 'green' },
    { color: 'black' }
];


console.log(pluck(points, 'color'));