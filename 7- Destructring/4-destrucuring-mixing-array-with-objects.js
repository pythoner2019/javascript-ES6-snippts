const companies = [
   { name: 'google', location: 'Egypt' },
   { name: 'facebook', location: 'italy' },
   { name: 'twitter', location: 'spain' },
   { name: 'uber', location: 'france' }
]

// ES5 :
// var location = companies[0].location;


// ES6 :
const [{ name, location }] = companies;
console.log(name, location)

// --------------------------------------//
// Mixing 

const google = {
   locations: ['Madrid', 'paris', 'cairo']
};

const { locations: [location_1, ...rest] } = google;
console.log(location_1);
console.log(`The rest of array is ${rest}`);