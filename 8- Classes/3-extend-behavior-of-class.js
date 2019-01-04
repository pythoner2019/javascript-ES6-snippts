class Car {
   constructor({ title }) {
      this.title = title;
   }

   drive() {
      return 'vroom';
   }
}


class Toyota extends Car {
   constructor(options) {
      super(options);
      this.color = options.color;
   }

   honk() {
      return 'beep';
   }
}


const myCar = new Toyota({ title: 'Nice car', color: 'red' });

console.log(myCar);
console.log(myCar.drive())
console.log(myCar.honk())


//  Finally it's so important in React front end development












// const car = new Car({ title: 'Toyota', sell: true });

// console.log(car);
// console.log(car.drive());

