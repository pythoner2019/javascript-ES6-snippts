const users = [
    { name: 'Muhammed' },
    { name: 'Ali' },
    { name: 'Hossam', id: 44 },
    { name: 'katrina' },
    { name: 'Hossam' },
]

const findUser = users.find((user) => {
    return user.name === 'Hossam';
})

const findUser_1 = users.find((user) => {
    return user.name === 'katrina';
})

console.log(findUser);
console.log(findUser_1);
// -------------------------------------------- //

function Car(model) {
    this.model = model;
}

const cars = [
    new Car('Fiat'),
    new Car('Mercedes'),
    new Car('Focus')
]

cars.find((car) => {
    return car.model === 'Mercedes';
})


// -------------------------------------------- //


const posts = [
    { id: 1, title: 'Hello world' },
    { id: 2, title: 'Nice to meet you' }
];

const comment = { postId: 2, comment: 'Hey there people' };

const postForComment = (posts, comment) => {
    return posts.find((post) => {
        return post.id === comment.postId;
    })
}

console.log(postForComment(posts, comment));

// -------------------------------------------- //


const accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

const userAccount = accounts.find((account) => {
    return account.balance === 12;
})

console.log(userAccount);
console.log('********************');


// -------------------------------------------- //

var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];


const findWhere = (array, obj) => {
    const property = Object.keys(obj)[0];
    console.log(property);

    const result = ladders.find((element) => {
        return element[property] === obj[property];
    })

    return result;
}


console.log(findWhere(ladders, { height: 25 }))
