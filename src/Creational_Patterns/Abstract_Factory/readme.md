# Abstract Factory

The abstract factory design pattern is like a toy factory that makes different kinds of toys. Imagine you want to make a toy car or a toy plane. Instead of making them separately, you can use an abstract factory to make both toys at the same time. 

The abstract factory has a set of instructions for making different types of toys, like toy cars and toy planes. When you ask the abstract factory to make a toy, it uses those instructions to create the right kind of toy for you.

For example, if you ask the abstract factory to make a toy car, it will follow the instructions for making a toy car and give you a toy car. If you ask it to make a toy plane, it will follow the instructions for making a toy plane and give you a toy plane.

This way, you can make different types of toys without having to create new instructions each time. The abstract factory takes care of all the details for you.


### How Its Work


```javascript
// Abstract Factory
class ToyFactory {
  createToy() {}
}

// Concrete Factory 1
class CarFactory extends ToyFactory {
  createToy() {
    return new ToyCar();
  }
}

// Concrete Factory 2
class PlaneFactory extends ToyFactory {
  createToy() {
    return new ToyPlane();
  }
}

// Abstract Product
class Toy {
  constructor(type) {
    this.type = type;
  }
}

// Concrete Product 1
class ToyCar extends Toy {
  constructor() {
    super("car");
  }
}

// Concrete Product 2
class ToyPlane extends Toy {
  constructor() {
    super("plane");
  }
}

// Client Code
const carFactory = new CarFactory();
const planeFactory = new PlaneFactory();

const car = carFactory.createToy();
console.log(car.type); // Output: "car"

const plane = planeFactory.createToy();
console.log(plane.type); // Output: "plane"

```

### Use Case


A real world example of the abstract factory design pattern is a car manufacturing plant. The plant has different assembly lines for different types of cars, such as sedans, SUVs, and sports cars. Each assembly line is a concrete factory that produces a specific type of car. The abstract factory is the overall car manufacturing plant that manages the different assembly lines and ensures that each car meets the required quality standards. The cars themselves are the concrete products that are created by the assembly lines. By using the abstract factory design pattern, the car manufacturing plant can easily add new types of cars to its production line without disrupting the existing assembly lines or affecting the quality of the cars.


```javascript

// Abstract Factory
class CarFactory {
  createCar() {}
}

// Concrete Factories
class SedanFactory extends CarFactory {
  createCar() {
    return new Sedan();
  }
}

class SUVFactory extends CarFactory {
  createCar() {
    return new SUV();
  }
}

class SportsCarFactory extends CarFactory {
  createCar() {
    return new SportsCar();
  }
}

// Concrete Products
class Sedan {
  constructor() {
    this.type = "Sedan";
  }
}

class SUV {
  constructor() {
    this.type = "SUV";
  }
}

class SportsCar {
  constructor() {
    this.type = "Sports Car";
  }
}

// Client Code
const sedanFactory = new SedanFactory();
const suvFactory = new SUVFactory();
const sportsCarFactory = new SportsCarFactory();

const sedan = sedanFactory.createCar();
const suv = suvFactory.createCar();
const sportsCar = sportsCarFactory.createCar();

console.log(sedan.type); // Sedan
console.log(suv.type); // SUV
console.log(sportsCar.type); // Sports Car
```
In this example, the abstract factory is represented by the CarFactory class, which has a createCar method that returns a concrete product. The SedanFactory, SUVFactory, and SportsCarFactory are the concrete factories that extend the CarFactory and implement the createCar method to return a specific type of car. The Sedan, SUV, and SportsCar are the concrete products that are created by the respective factories. Finally, the client code creates instances of the concrete factories and uses them to create concrete products.



























