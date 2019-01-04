const getMessage = () => {
    const year = new Date().getFullYear();

    return `The Year Now is ${year}`;
}

console.log(getMessage());