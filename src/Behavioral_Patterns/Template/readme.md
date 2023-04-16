# Template


The Template Design Pattern is like following a recipe to bake a cake. The recipe tells you what ingredients to use, how much of each ingredient to use, and the steps to follow to bake the cake. You can follow the same recipe every time you want to bake a cake, but you can change the type of cake by using different ingredients or following a different set of steps.

In programming, the Template Design Pattern is used to create a blueprint for a process that can be reused with different inputs. For example, let's say we have a class called Car that has a method called startEngine(). We can create a template for starting the engine that can be reused for different types of cars. The template might look something like this:
```javascript
class Car {
  startEngine() {
    this.putKeyInIgnition();
    this.turnKey();
    this.pressGasPedal();
  }

  putKeyInIgnition() {
    // code to put key in ignition
  }

  turnKey() {
    // code to turn key
  }

  pressGasPedal() {
    // code to press gas pedal
  }
}

```
Now, let's say we want to create a new class called SportsCar that extends the Car class but has a different way of starting the engine. We can override the startEngine() method in the SportsCar class:
```javascript
class SportsCar extends Car {
  startEngine() {
    this.putKeyInIgnition();
    this.pushStartButton();
    this.revEngine();
  }

  pushStartButton() {
    // code to push start button
  }

  revEngine() {
    // code to rev engine
  }
}
```

Now, when we create an instance of SportsCar and call the startEngine() method, it will follow the template for starting the engine but use the overridden methods in the SportsCar class. This allows us to reuse the same template for starting the engine across different types of cars while still allowing for customization based on the specific type of car.


### Use Case


One real-world example of the Template Design Pattern in JavaScript is the React library. React uses a template called a "component" to create reusable UI elements. Components define a set of methods and properties that can be reused across different parts of an application.

For example, let's say we have a component called Button that defines a basic button element with some default styling. We can create a template for this component that can be reused across different parts of our application:
```javascript
class Button extends React.Component {
  render() {
    return (
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {this.props.label}
      </button>
    );
  }
}

```
Now, let's say we want to create a new component called PrimaryButton that extends the Button component but has a different color scheme. We can override the render() method in the PrimaryButton component:
```javascript
class PrimaryButton extends Button {
  render() {
    return (
      <button style={{ backgroundColor: 'green', color: 'white' }}>
        {this.props.label}
      </button>
    );
  }
}
```

Now, when we use the PrimaryButton component in our application, it will follow the template for the Button component but use the overridden render() method in the PrimaryButton component. This allows us to reuse the same template for creating buttons across different parts of our application while still allowing for customization based on the specific use case.































