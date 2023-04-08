# Chain of Responsibility


The Chain of Responsibility is like a line of friends holding hands. If you want to give a message to the friend at the end of the line, you don't have to go all the way down to him. You can just pass the message to your nearest friend and he will pass it to his nearest friend and so on until it reaches the friend at the end of the line.

For example, let's say you want to ask your mom for permission to go play outside. But your mom is busy cooking in the kitchen and can't hear you. So you ask your older brother who is sitting nearby, "Can I go play outside?" Your brother knows your mom is busy, so he asks your dad who is in the next room, "Can my little brother go play outside?" Your dad knows your mom is busy too, so he goes to ask her, "Can our little one go play outside?" Finally, your mom says yes and your dad passes the message back to your brother who tells you, "You can go play outside now."

This is how the Chain of Responsibility works. It helps pass requests or tasks down a chain of objects until one of them can handle it.



### How Its Work



```javascript
// Define an interface for handling requests
interface Handler {
    setNext(handler: Handler): Handler;
    handleRequest(request: Request): void;
}

// Define a concrete handler class that implements the interface
class ConcreteHandlerA implements Handler {
    private nextHandler: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handleRequest(request: Request): void {
        if (request.condition == "condition A") {
            // Handle the request
        } else if (this.nextHandler) {
            // Pass the request to the next handler in the chain
            this.nextHandler.handleRequest(request);
        }
    }
}

// Define another concrete handler class that implements the interface
class ConcreteHandlerB implements Handler {
    private nextHandler: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handleRequest(request: Request): void {
        if (request.condition == "condition B") {
            // Handle the request
        } else if (this.nextHandler) {
            // Pass the request to the next handler in the chain
            this.nextHandler.handleRequest(request);
        }
    }
}

// Define a request object that will be passed down the chain
class Request {
    condition: string;
}

// Create a chain of handlers and set their order
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
handlerA.setNext(handlerB);

// Start the chain by passing a request to the first handler
const request = new Request();
request.condition = "condition B";
handlerA.handleRequest(request);
```




### Use Case 


```javascript
// Define the base class for handling purchase requests
class PurchaseHandler {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest() {
    if (this.nextHandler) {
      return this.nextHandler.handleRequest();
    }
    return null;
  }
}

// Create concrete classes for handling specific types of purchase requests
class Manager extends PurchaseHandler {
  handleRequest() {
    if (this.amount <= 1000) {
      console.log(`${this.name} approved the purchase of $${this.amount}`);
    } else {
      super.handleRequest();
    }
  }
}

class Director extends PurchaseHandler {
  handleRequest() {
    if (this.amount <= 5000) {
      console.log(`${this.name} approved the purchase of $${this.amount}`);
    } else {
      super.handleRequest();
    }
  }
}

class CEO extends PurchaseHandler {
  handleRequest() {
    if (this.amount <= 10000) {
      console.log(`${this.name} approved the purchase of $${this.amount}`);
    } else {
      console.log(`Purchase request of $${this.amount} exceeds the company's spending limit`);
    }
  }
}

// Set up the chain of responsibility by linking the handlers together
const manager = new Manager('John', 800);
const director = new Director('Jane', 3000);
const ceo = new CEO('Bob', 15000);
manager.setNext(director).setNext(ceo);

// Send purchase requests down the chain
const request1 = new PurchaseHandler('Laptop', 500);
manager.handleRequest(request1); // Output: John approved the purchase of $500

const request2 = new PurchaseHandler('Office Furniture', 8000);
manager.handleRequest(request2); // Output: Purchase request of $8000 exceeds the company's spending limit

```









