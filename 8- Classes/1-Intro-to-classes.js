function Car(options) {
   this.title = options.title
}


Car.prototype.drive = function () {
   return 'vroom';
}

// prototypical Inheritance so Bad X .. the link between 2 functions
function Toyota(options) {
   Car.call(this, options);
   this.color = options.color;
}


Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
   return 'beep'
}


const toyota_1 = new Toyota({ color: 'red', title: 'Daily driver' });

console.log(toyota_1)
console.log(toyota_1.drive())
console.log(toyota_1.honk())


// const car = new Car({ title: 'Mazda' });
// console.log(car);
// console.log(car.drive());
