# Memento



Imagine you have a toy that can change colors. You can press a button to change its color to red, blue, or green. But sometimes you might change the color by mistake and want to go back to the previous color. This is where the Memento design pattern comes in!

The Memento design pattern is like a backup system for your toy's colors. Every time you change the color, the pattern takes a "snapshot" of the current color and saves it. If you want to go back to a previous color, you can ask the pattern to restore the color from one of the snapshots.

For example, let's say your toy is currently green. You press the button to change it to blue, and the Memento pattern takes a snapshot of the green color and saves it. You press the button again to change it to red, and the pattern takes another snapshot of the blue color and saves it. Now, if you want to go back to the blue color, you can ask the pattern to restore the color from the previous snapshot.

In programming terms, the Memento pattern is used to save the state of an object (like your toy's color) so that it can be restored later. It's useful when you need to undo or redo actions in your program, or when you want to save a snapshot of an object's state for future use.




Sure, here's some simple pseudocode in JavaScript to demonstrate the Memento design pattern:

```javascript
// Define a class to represent the state of an object (in this case, a color)
class ColorState {
  constructor(color) {
    this.color = color;
  }
}

// Define a class to represent the originator object (the object whose state we want to save and restore)
class Toy {
  constructor() {
    this.color = 'green';
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  // This method creates a new memento object to save the current state of the toy
  saveState() {
    return new ColorState(this.color);
  }

  // This method restores the toy's state from a memento object
  restoreState(memento) {
    this.color = memento.color;
  }
}

// Define a class to represent the caretaker object (the object that manages the mementos)
class ColorHistory {
  constructor() {
    this.history = [];
  }

  // This method adds a new memento object to the history array
  addState(state) {
    this.history.push(state);
  }

  // This method retrieves the most recent memento object from the history array
  getLastState() {
    return this.history.pop();
  }
}

// Create a new toy object and a new color history object
const toy = new Toy();
const colorHistory = new ColorHistory();

// Change the toy's color to blue and save the state
toy.changeColor('blue');
colorHistory.addState(toy.saveState());

// Change the toy's color to red and save the state
toy.changeColor('red');
colorHistory.addState(toy.saveState());

// Restore the toy's color to blue by retrieving the most recent state from the history
toy.restoreState(colorHistory.getLastState());

// The toy's color should now be blue again
console.log(toy.color); // Output: 'blue'
```




In this example, the `Toy` class represents the originator object, the `ColorState` class represents the memento object, and the `ColorHistory` class represents the caretaker object. The `Toy` class has a `changeColor` method to change the toy's color, a `saveState` method to save the current color state as a memento object, and a `restoreState` method to restore the toy's color from a memento object. The `ColorHistory` class has methods to add new memento objects to the history array and to retrieve the most recent memento object from the history array.







