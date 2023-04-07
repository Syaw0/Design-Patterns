# Strategy


Imagine you have a toy box with different kinds of toys - some are cars, some are dolls, some are blocks. Each toy is different and has its own unique features. 

Now, let's say you want to play a game with these toys where you need to organize them based on their type. You can use the strategy design pattern to do this. 

The strategy design pattern is like having a helper who knows how to sort things. This helper can look at each toy and figure out what type it is - a car, a doll, or a block - and then put it in the right pile. 

So, you can tell your helper to sort all the cars in one pile, all the dolls in another pile, and all the blocks in a third pile. The helper knows what to do because you gave it instructions on how to sort the toys. 

In programming, we use the strategy design pattern to organize different parts of our code based on their functionality. For example, we might have different sorting algorithms that we want to use depending on the situation. We can use the strategy design pattern to select the right algorithm based on the input we're given.



### How Its Work

```javascript
// Define the toy interface
interface Toy {
  function play(): void;
}

// Define different types of toys
class Car implements Toy {
  function play() {
    // Play with the car
  }
}

class Doll implements Toy {
  function play() {
    // Play with the doll
  }
}

class Block implements Toy {
  function play() {
    // Play with the block
  }
}

// Define the sorting strategy interface
interface SortStrategy {
  function sort(toys: Array<Toy>): Array<Toy>;
}

// Define different sorting strategies
class ByTypeSortStrategy implements SortStrategy {
  function sort(toys: Array<Toy>): Array<Toy> {
    // Sort toys by type
    // Put cars in one pile, dolls in another, and blocks in a third
    return sortedToys;
  }
}

class ByColorSortStrategy implements SortStrategy {
  function sort(toys: Array<Toy>): Array<Toy> {
    // Sort toys by color
    // Put all red toys in one pile, blue toys in another, and so on
    return sortedToys;
  }
}

// Use the strategy to sort the toys
function organizeToys(toys: Array<Toy>, strategy: SortStrategy): Array<Toy> {
  return strategy.sort(toys);
}

// Example usage
toys = [new Car(), new Doll(), new Block(), ...];
strategy = new ByTypeSortStrategy();
organizedToys = organizeToys(toys, strategy);
// organizedToys now contains the toys sorted by type
```


### Use Case


Here's an example of how the strategy pattern could be implemented in JavaScript for a payment processing system:


```javascript

// Define the PaymentStrategy interface
class PaymentStrategy {
  processPayment() {}
}

// Define the CreditCardPaymentStrategy
class CreditCardPaymentStrategy extends PaymentStrategy {
  processPayment() {
    // Implement credit card payment logic
  }
}

// Define the PayPalPaymentStrategy
class PayPalPaymentStrategy extends PaymentStrategy {
  processPayment() {
    // Implement PayPal payment logic
  }
}

// Define the ApplePayPaymentStrategy
class ApplePayPaymentStrategy extends PaymentStrategy {
  processPayment() {
    // Implement Apple Pay payment logic
  }
}

// Define the PaymentProcessor class
class PaymentProcessor {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  processPayment() {
    this.paymentStrategy.processPayment();
  }
}

// Example usage
const creditCardPayment = new CreditCardPaymentStrategy();
const paymentProcessor = new PaymentProcessor(creditCardPayment);
paymentProcessor.processPayment();

const payPalPayment = new PayPalPaymentStrategy();
paymentProcessor.paymentStrategy = payPalPayment;
paymentProcessor.processPayment(); 

```

In this example, we define the PaymentStrategy interface and three concrete implementations for credit card, PayPal, and Apple Pay payments. We also define a PaymentProcessor class that takes a payment strategy as a parameter and uses it to process the payment.

We can then create instances of each payment strategy and pass them to the PaymentProcessor to dynamically choose which payment method to use.












