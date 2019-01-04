class Car {
   constructor({ title, sell }) {
      this.title = title;
      this.sell = sell
   }

   drive() {
      return 'vroom';
   }
}


const car = new Car({ title: 'Toyota', sell: true });

console.log(car);
console.log(car.drive());

