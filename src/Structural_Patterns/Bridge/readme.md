# Bridge Pattern

Imagine you have a toy car that can be controlled with a remote. The car has different types of wheels, such as big wheels for off-road driving and small wheels for racing on a smooth surface. The remote also has different buttons for controlling the car's movement, such as forward, backward, left, and right.

Now, let's say you want to create a new type of remote that can control not only the toy car but also a toy boat. The boat has different types of propellers, such as a big propeller for sailing in rough waters and a small propeller for calm waters. The boat can also move in different directions, such as forward, backward, left, and right.

The bridge design pattern helps you create a system where the remote and the toys can work together without knowing about each other's specific details. In this case, you can create a bridge between the remote and the toys that allows them to communicate with each other without being aware of each other's details.

For example, you can create a "wheel" interface that defines the basic properties of a wheel, such as its size and material. Then you can create two classes that implement this interface: "big wheel" and "small wheel." Similarly, you can create a "propeller" interface that defines the basic properties of a propeller, such as its size and shape. Then you can create two classes that implement this interface: "big propeller" and "small propeller."

Finally, you can create a "remote" class that has methods for controlling the movement of the toys. This class takes in an object that implements either the "wheel" or "propeller" interface and uses it to control the movement of the toy. This way, the remote doesn't need to know about the specific details of the toy it's controlling; it just needs to know that it has an object that implements the right interface.

By using the bridge design pattern, you can create a flexible system where different types of toys can be controlled by the same remote, and new types of toys can be added without needing to change the remote's code.


### How Its Work

```javascript
// Define the Abstraction interface
interface Abstraction {
  implementor: Implementor;
  operation(): void;
}

// Implement the Refined Abstraction class
class RefinedAbstraction implements Abstraction {
  constructor(public implementor: Implementor) {}

  operation() {
    console.log("RefinedAbstraction: " + this.implementor.operationImp());
  }
}

// Define the Implementor interface
interface Implementor {
  operationImp(): string;
}

// Implement the Concrete Implementor A class
class ConcreteImplementorA implements Implementor {
  operationImp() {
    return "ConcreteImplementorA";
  }
}

// Implement the Concrete Implementor B class
class ConcreteImplementorB implements Implementor {
  operationImp() {
    return "ConcreteImplementorB";
  }
}

// Create an instance of the Refined Abstraction with Concrete Implementor A
const refinedAbstractionA = new RefinedAbstraction(new ConcreteImplementorA());

// Call the operation method on the Refined Abstraction with Concrete Implementor A
refinedAbstractionA.operation(); // Output: RefinedAbstraction: ConcreteImplementorA

// Create an instance of the Refined Abstraction with Concrete Implementor B
const refinedAbstractionB = new RefinedAbstraction(new ConcreteImplementorB());

// Call the operation method on the Refined Abstraction with Concrete Implementor B
refinedAbstractionB.operation(); // Output: RefinedAbstraction: ConcreteImplementorB

// Explanation:
// The Bridge Design Pattern is used to separate an abstraction from its implementation so that they can be modified independently.
// In this example, we have an Abstraction interface and a concrete implementation of it called RefinedAbstraction. The RefinedAbstraction class has a reference to an object that implements the Implementor interface. We have two concrete implementations of the Implementor interface called ConcreteImplementorA and ConcreteImplementorB.
// We create two instances of the RefinedAbstraction class, one with ConcreteImplementorA and one with ConcreteImplementorB. When we call the operation method on each instance, it calls the operationImp method on the referenced Implementor object and outputs the result. This shows how the abstraction and implementation can be modified independently without affecting each other.



```




























