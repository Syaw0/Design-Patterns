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

























