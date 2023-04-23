

// Define the Abstraction interface
class Vehicle {
  constructor(make, model, year, engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }
}

// Implement the Refined Abstraction class
class Car extends Vehicle {
  constructor(make, model, year, engine) {
    super(make, model, year, engine);
  }

  drive() {
    console.log(Driving a ${this.make} ${this.model} (${this.year}));
  }
}

// Define the Implementor interface
class Engine {
  start() {}

  stop() {}
}

// Implement the Concrete Implementor A class
class GasEngine extends Engine {
  start() {
    console.log("Starting gas engine...");
  }

  stop() {
    console.log("Stopping gas engine...");
  }
}

// Implement the Concrete Implementor B class
class ElectricEngine extends Engine {
  start() {
    console.log("Starting electric engine...");
  }

  stop() {
    console.log("Stopping electric engine...");
  }
}

// Create an instance of the Refined Abstraction with Concrete Implementor A
const gasEngineCar = new Car("Toyota", "Camry", "2021", new GasEngine());

// Call the methods on the Refined Abstraction with Concrete Implementor A
gasEngineCar.start(); // Output: Starting gas engine...
gasEngineCar.drive(); // Output: Driving a Toyota Camry (2021)
gasEngineCar.stop(); // Output: Stopping gas engine...

// Create an instance of the Refined Abstraction with Concrete Implementor B
const electricEngineCar = new Car("Tesla", "Model S", "2021", new ElectricEngine());

// Call the methods on the Refined Abstraction with Concrete Implementor B
electricEngineCar.start(); // Output: Starting electric engine...
electricEngineCar.drive(); // Output: Driving a Tesla Model S (2021)
electricEngineCar.stop(); // Output: Stopping electric engine...

// Explanation:
// In this example, we have an Abstraction interface called Vehicle and a concrete implementation of it called Car. The Car class has a reference to an object that implements the Engine interface. We have two concrete implementations of the Engine interface called GasEngine and ElectricEngine.
// We create two instances of the Car class, one with GasEngine and one with ElectricEngine. When we call the start method on each instance, it calls the start method on the referenced Engine object and outputs the result. Similarly, when we call the stop method, it calls the stop method on the referenced Engine object. This shows how the abstraction (Vehicle) and implementation (Engine) can be modified independently without affecting each other. For example, we can easily add new types of vehicles or new types of engines without changing the existing classes.
