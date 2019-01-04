const count = (targetString) => {
    const characters = ['a', 'c', 'f', 'e'];
    let number = 0;

    for (let i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++
        }
    }

    return number;
}

console.log(count(''))