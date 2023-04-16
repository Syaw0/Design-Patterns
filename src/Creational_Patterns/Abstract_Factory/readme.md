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
























