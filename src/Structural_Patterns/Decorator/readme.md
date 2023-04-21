# Decorator Pattern

Imagine you have a plain cupcake. You want to make it look fancier by adding some frosting and sprinkles. The cupcake is the original object, and the frosting and sprinkles are the decorations. 

In the same way, the Decorator design pattern allows you to add extra functionality to an object without changing its original structure. The original object is decorated with additional features, just like the cupcake is decorated with frosting and sprinkles. 

For example, let's say you have a class called "Car" that has basic features like speed, color, and model. You can use the Decorator pattern to add extra features like a GPS system or heated seats, without changing the original "Car" class. This way, you can create different variations of the original object with different combinations of features, just like you can create different variations of cupcakes with different types of frosting and sprinkles.


### How its Work




Let's say we have a class called "Pizza" that has basic features like crust, sauce, and toppings. We want to add extra features like extra cheese or extra toppings without changing the original "Pizza" class.
```javascript
// Define the base Pizza class
class Pizza {
  constructor(crust, sauce, toppings) {
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }

  // Define a method to calculate the price of the pizza
  calculatePrice() {
    // Calculate the base price of the pizza based on its ingredients
    let price = 10; // base price
    if (this.crust === 'thin') {
      price += 2;
    } else if (this.crust === 'thick') {
      price += 4;
    }
    if (this.sauce === 'marinara') {
      price += 1;
    } else if (this.sauce === 'pesto') {
      price += 2;
    }
    price += this.toppings.length * 0.5; // add $0.50 for each topping
    return price;
  }
}

// Define a decorator class for adding extra cheese to a pizza
class ExtraCheeseDecorator {
  constructor(pizza) {
    this.pizza = pizza;
  }

  // Override the calculatePrice method to include the extra cheese cost
  calculatePrice() {
    return this.pizza.calculatePrice() + 2; // add $2 for extra cheese
  }

  // Add a method to describe the pizza with extra cheese
  describe() {
    return this.pizza.describe() + ", with extra cheese";
  }
}

// Define a decorator class for adding extra toppings to a pizza
class ExtraToppingsDecorator {
  constructor(pizza, extraToppings) {
    this.pizza = pizza;
    this.extraToppings = extraToppings;
  }

  // Override the calculatePrice method to include the extra toppings cost
  calculatePrice() {
    return this.pizza.calculatePrice() + (this.extraToppings.length * 1); // add $1 for each extra topping
  }

  // Add a method to describe the pizza with extra toppings
  describe() {
    return this.pizza.describe() + ", with extra toppings: " + this.extraToppings.join(", ");
  }
}

// Create a plain pizza with a thin crust, marinara sauce, and pepperoni toppings
let pizza = new Pizza('thin', 'marinara', ['pepperoni']);

// Decorate the pizza with extra cheese and extra toppings
pizza = new ExtraCheeseDecorator(pizza);
pizza = new ExtraToppingsDecorator(pizza, ['mushrooms', 'olives']);

// Calculate the price and description of the decorated pizza
console.log(pizza.calculatePrice()); // should output 16.50
console.log(pizza.describe()); // should output "Pizza with thin crust, marinara sauce, pepperoni, with extra cheese, with extra toppings: mushrooms, olives"

```
In this example, we start with a basic "Pizza" class that has a crust, sauce, and toppings. We define a method to calculate the price of the pizza based on its ingredients.

We then create two decorator classes: "ExtraCheeseDecorator" and "ExtraToppingsDecorator". These classes take a "Pizza" object as input and add extra functionality to it. The "ExtraCheeseDecorator" adds $2 to the price of the pizza and adds a description of "with extra cheese". The "ExtraToppingsDecorator" adds $1 for each extra topping and adds a description of "with extra toppings" followed by a list of the extra toppings.

We create a plain pizza with a thin crust, marinara sauce, and pepperoni toppings. We then decorate the pizza with extra cheese and extra toppings using the decorator classes. Finally, we calculate the price and description of the decorated pizza.

This example shows how the Decorator pattern can be used to add extra functionality to an object without changing its original structure. We can create different variations of the original "Pizza" object by adding different combinations of decorators.




















