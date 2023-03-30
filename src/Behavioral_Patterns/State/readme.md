# State



The state design pattern is like having different suits for different occasions. Just like you wear different clothes for different activities, a program can have different "states" that it can be in, and each state has its own set of behaviors or actions.

Let's imagine you have a toy car that can move forward, backward, and stop. The car can be in different states depending on what it is doing. When you press the "forward" button, it goes forward. When you press the "backward" button, it goes backward. And when you press the "stop" button, it stops moving.

In the state design pattern, we would create a separate class for each state of the car, such as "ForwardState", "BackwardState", and "StopState". Each of these classes would have its own set of methods, or behaviors, that the car can perform while in that state. For example, the ForwardState class would have a "move forward" method, but it wouldn't have a "move backward" method.

When the user presses a button on the toy car, the car object would switch to the appropriate state object, based on the button that was pressed. So if the "forward" button was pressed, the car object would switch to the ForwardState object, and then it would be able to move forward.

By using the state design pattern, we can make our programs more flexible and easier to maintain, because we can add new states or behaviors without having to change the existing code. It's like having a wardrobe full of different clothes for different occasions, so you're always ready for anything!



### How Its Work


```javascript
// Define the State interface
class State {
  // Define methods that will be implemented by concrete states
  handle() {}
}

// Define concrete states that implement the State interface
class ConcreteStateA extends State {
  handle() {
    console.log('ConcreteStateA handles the request.');
  }
}

class ConcreteStateB extends State {
  handle() {
    console.log('ConcreteStateB handles the request.');
  }
}

// Define the Context class that will use the State pattern
class Context {
  constructor() {
    // Set the initial state of the context
    this.state = new ConcreteStateA();
  }

  // Define methods that will be used by the client to interact with the context
  request() {
    this.state.handle();
  }

  // Define a method that will allow the client to change the state of the context
  setState(state) {
    this.state = state;
  }
}

// Usage
const context = new Context();
context.request(); // Output: ConcreteStateA handles the request.
context.setState(new ConcreteStateB());
context.request(); // Output: ConcreteStateB handles the request.
```

In this example, the State interface defines the methods that will be implemented by concrete states. The ConcreteStateA and ConcreteStateB classes implement the State interface and provide their own implementation of the `handle` method.

The Context class uses the State pattern to delegate requests to the current state. The `request` method calls the `handle` method of the current state. The `setState` method allows the client to change the state of the context.

In the usage example, we create a new Context object with an initial state of ConcreteStateA. We call the `request` method, which delegates the request to the ConcreteStateA object. We then call the `setState` method to change the state of the context to ConcreteStateB. Finally, we call the `request` method again, which delegates the request to the ConcreteStateB object.



