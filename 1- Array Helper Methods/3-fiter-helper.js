
const products1 = [
    { name: 'banana', type: 'fruit' },
    { name: 'weed', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
    { name: 'rise', type: 'vegetable' }
]

let filteredProducts = [];
//  ES5 

for (let i = 0; i < products1.length; i++) {
    if (products1[i].type === 'fruit') {
        filteredProducts.push(products1[i]);
    }
}

console.log('>>>', filteredProducts);
console.log("**********************************************")

//  ES6 -- Filter Helper Method

const products = [
    { name: 'banana', type: 'fruit' },
    { name: 'weed', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
    { name: 'rise', type: 'vegetable' }
]

const filtered_1 = products.filter((product) => {
    return product.type === 'fruit';
})

console.log('>>>', filtered_1);
console.log("**********************************************")

//  -------------------------------------------------- //

const products2 = [

    { name: 'cucumber', type: 'vegetable', quantity: 1, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }

];

const filtered = products2.filter((product) => {
    return product.type === 'fruit' && product.quantity > 0 && product.price < 10;
})

console.log('>>>', filtered);
console.log("**********************************************")


//  -------------------------------------------------- //

const post = { id: 4, title: 'New Post' };
const comments = [
    { postId: 4, comment: 'Hello There' },
    { postId: 3, comment: 'Fuck You' },
    { postId: 4, comment: 'Nice to meet you' }
];


const commentsForPost = (post, comments) => {
    return comments.filter((comment) => {
        return comment.postId === post.id;
    })
}

console.log('>>>', commentsForPost(post, comments));
console.log("**********************************************")


//  -------------------------------------------------- //

// challenge :: opposite way of filter :::::

const reject = (array, iteratorFunction) => {
    return array.filter((item) => {
        return !iteratorFunction(item);
    })
}

const numbers = [10, 20, 30, 40, 50, 60];

const moreThan30 = reject(numbers, (number) => {
    return number < 30;
})

console.log(moreThan30);