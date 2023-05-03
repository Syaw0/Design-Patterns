

interface Car {
  getDescription(): string;
  cost(): number;
}

class BaseCar implements Car {
  getDescription() {
    return "Base Car";
  }

  cost() {
    return 20000;
  }
}

class CarDecorator implements Car {
  private car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  getDescription() {
    return this.car.getDescription();
  }

  cost() {
    return this.car.cost();
  }
}

class LeatherSeatsDecorator extends CarDecorator {
  constructor(car: Car) {
    super(car);
  }

  getDescription() {
    return `${super.getDescription()} with Leather Seats`;
  }

  cost() {
    return super.cost() + 5000;
  }
}

class SunroofDecorator extends CarDecorator {
  constructor(car: Car) {
    super(car);
  }

  getDescription() {
    return `${super.getDescription()} with Sunroof`;
  }

  cost() {
    return super.cost() + 3000;
  }
}

// Usage
let myCar: Car = new BaseCar();
console.log(myCar.getDescription()); // Base Car
console.log(myCar.cost()); // 20000

myCar = new LeatherSeatsDecorator(myCar);
console.log(myCar.getDescription()); // Base Car with Leather Seats
console.log(myCar.cost()); // 25000

myCar = new SunroofDecorator(myCar);
console.log(myCar.getDescription()); // Base Car with Leather Seats with Sunroof
console.log(myCar.cost()); // 28000


// In this example, we have a `Car` interface that defines the basic methods for a car object. We then have a `BaseCar` class that implements the `Car` interface and provides a default implementation of the methods.

// We then have a `CarDecorator` class that also implements the `Car` interface and takes in a `Car` object as a parameter in its constructor. This class acts as a base decorator that all other decorators will extend.

// We then have two concrete decorators, `LeatherSeatsDecorator` and `SunroofDecorator`, that extend the `CarDecorator` class. These classes add additional functionality to the car object by modifying its description and cost.

// Finally, we have an example usage of the decorators where we create a `BaseCar` object and then add the `LeatherSeatsDecorator` and `SunroofDecorator` to it. This results in a car object with a description of "Base Car with Leather Seats with Sunroof" and a cost of 28000.

// The Decorator design pattern is useful in situations where you want to add functionality to an object without modifying its original implementation. It allows for dynamic modification of an object's behavior at runtime by adding or removing decorators as needed. In this example, we can easily add or remove additional decorators to modify the car object's functionality without modifying the `BaseCar` class.
