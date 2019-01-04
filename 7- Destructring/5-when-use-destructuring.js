const signUp = ({ city, username, email, dateOfBirth, password }) => {
   return `My name is ${username} and live in ${city}, and my email is : ${email}. and password is : ${password}. I also born in ${dateOfBirth}`
};

const user = {
   username: 'Muhammed',
   password: 1234,
   email: 'alaa@gmail.com',
   dateOfBirth: '1/2/1991',
   city: 'cairo'
};


console.log(signUp(user));

// --------------------------------------//
// another good important example :::::

const points = [
   [4, 5],
   [10, 1],
   [0, 40]
];

const axis = points.map(([x, y]) => {
   // return { x: x, y: y }
   return { x, y }

})

console.log(axis);