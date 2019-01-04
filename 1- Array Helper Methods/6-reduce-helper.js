// uses:
// 


const numbers = [10, 20, 30];
const sum = 0;

const reducedFilter = numbers.reduce((sum, number) => {
    return sum + number;
}, 0)


console.log(reducedFilter);

// ------------------------------------------ //

const primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'green' }
];

const colorsReduced = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color);

    return previous;
}, [])

console.log(colorsReduced);
// console.log(primaryColors);


// interview of reduce :::: important;
// giving string contain some numbers of parenthesis .. are the expressions are correct
// if this expressions are balanced or not.   "(((()))))"
// Here is this example very important


const balancedParens = (string) => {
    return !string.split("").reduce((previous, char) => {
        if (previous < 0) { return previous; }
        if (char === "(") { return ++previous; }
        if (char === ")") { return --previous; }

        return previous;
    }, 0);
}

console.log(balancedParens(""));
