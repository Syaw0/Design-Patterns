# Factory Method

Imagine you are making a pizza. You have different types of toppings, like cheese, pepperoni, and vegetables. But you don't want to make all the pizzas yourself, you want someone else to make them for you. So, you ask your friends to make the pizzas for you. However, each friend likes different toppings and makes their pizza in a different way.

To solve this problem, you create a "Pizza Factory". This factory has a specific way of making pizza, and it can make different types of pizzas based on your friends' preferences. For example, if your friend likes cheese, the factory will make a cheese pizza for them. If they like vegetables, the factory will make a vegetable pizza.

The "Pizza Factory" is the factory method design pattern. It is a way of creating objects (in this case, pizzas) without specifying the exact class of object that will be created. The factory method pattern allows you to delegate the creation of objects to a separate class (the factory), which can create objects based on specific requirements or preferences.

### How Its Work


```javascript
class Pizza {
  constructor() {
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}

class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Cheese Pizza';
    this.toppings.push('cheese');
  }
}

class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Pepperoni Pizza';
    this.toppings.push('pepperoni');
  }
}

class VeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Veggie Pizza';
    this.toppings.push('mushrooms', 'onions', 'peppers');
  }
}

class PizzaFactory {
  createPizza(type) {
    let pizza;

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza();
        break;
      case 'pepperoni':
        pizza = new PepperoniPizza();
        break;
      case 'veggie':
        pizza = new VeggiePizza();
        break;
      default:
        throw new Error(`Invalid pizza type: ${type}`);
    }

    return pizza;
  }
}

const pizzaFactory = new PizzaFactory();
const cheesePizza = pizzaFactory.createPizza('cheese');
const pepperoniPizza = pizzaFactory.createPizza('pepperoni');
const veggiePizza = pizzaFactory.createPizza('veggie');

console.log(cheesePizza);
console.log(pepperoniPizza);
console.log(veggiePizza);
```

In this example, we have three types of pizzas: CheesePizza, PepperoniPizza, and VeggiePizza. Each pizza type is a subclass of the Pizza class, which has a method for adding toppings. The PizzaFactory class has a createPizza method that takes a type argument and returns a new instance of the corresponding pizza type. We can use the PizzaFactory to create different types of pizzas based on user input or other criteria.


### Use Case


One real-world example of the factory method pattern in JavaScript is a car manufacturer. The manufacturer produces different models of cars, such as sedans, SUVs, and sports cars. Each model has different features and specifications.

The factory method pattern can be used to create a CarFactory class that has methods for creating each type of car. Each method will return an instance of the corresponding car class, such as SedanCar, SUVCar, or SportsCar.

Here's an example code snippet for the factory method pattern in JavaScript:
```javascript
class Car {
  constructor(name, engine, transmission, color) {
    this.name = name;
    this.engine = engine;
    this.transmission = transmission;
    this.color = color;
  }

  start() {
    console.log(`Starting ${this.name} car with ${this.engine} engine and ${this.transmission} transmission in ${this.color} color`);
  }

  drive() {
    console.log(`Driving ${this.name} car`);
  }

  stop() {
    console.log(`Stopping ${this.name} car`);
  }
}

class SedanCar extends Car {
  constructor(engine, transmission, color) {
    super("Sedan", engine, transmission, color);
  }
}

class SUVCar extends Car {
  constructor(engine, transmission, color) {
    super("SUV", engine, transmission, color);
  }
}

class SportsCar extends Car {
  constructor(engine, transmission, color) {
    super("Sports", engine, transmission, color);
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "Sedan":
        return new SedanCar("4-cylinder", "automatic", "white");
      case "SUV":
        return new SUVCar("6-cylinder", "automatic", "black");
      case "Sports":
        return new SportsCar("8-cylinder", "manual", "red");
      default:
        throw new Error(`Invalid car type: ${type}`);
    }
  }
}

let carFactory = new CarFactory();

let sedanCar = carFactory.createCar("Sedan");
let suvCar = carFactory.createCar("SUV");
let sportsCar = carFactory.createCar("Sports");

sedanCar.start();
sedanCar.drive();
sedanCar.stop();

suvCar.start();
suvCar.drive();
suvCar.stop();

sportsCar.start();
sportsCar.drive();
sportsCar.stop();

```
In this example, we have three types of cars: Sedan, SUV, and Sports. Each car type is a subclass of the Car class, which has methods for starting, driving, and stopping the car.

The CarFactory class is a concrete factory that implements the factory method interface. It has a createCar method that takes a car type as an argument and returns an instance of the corresponding car class.

We can use the CarFactory to create different types of cars based on customer orders. The factory method pattern allows us to encapsulate the car creation logic in the CarFactory class, making it easier to maintain and modify in the future. Additionally, we can easily add new car types by creating new subclasses of the Car class and updating the CarFactory class to include the new type.

































