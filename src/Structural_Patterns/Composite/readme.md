# Composite Pattern (Object Tree)




The Composite design pattern is like playing with Lego blocks. You have a big Lego block that is made up of smaller Lego blocks, and those smaller blocks can also be made up of even smaller blocks. It's like a tree where the trunk is made up of branches, and those branches have leaves, and those leaves have veins.

In programming, the Composite pattern lets you treat individual objects and groups of objects in the same way. For example, imagine you have a drawing program and you want to draw different shapes like circles, squares, and triangles. You can use the Composite pattern to create a "Shape" class that can represent a single shape or a group of shapes.


### How Its Work


```javascript

// The Component interface that defines the common methods for all shapes
class Shape {
  draw() {
    console.log('Drawing shape...');
  }
}

// The Leaf class that represents a single shape
class Circle extends Shape {
  draw() {
    console.log('Drawing circle...');
  }
}

// The Leaf class that represents a single shape
class Square extends Shape {
  draw() {
    console.log('Drawing square...');
  }
}

// The Leaf class that represents a single shape
class Triangle extends Shape {
  draw() {
    console.log('Drawing triangle...');
  }
}

// The Composite class that represents a group of shapes
class Group extends Shape {
  constructor() {
    super();
    this.shapes = ;
  }
  
  addShape(shape) {
    this.shapes.push(shape);
  }
  
  removeShape(shape) {
    const index = this.shapes.indexOf(shape);
    if (index !== -1) {
      this.shapes.splice(index, 1);
    }
  }
  
  draw() {
    console.log('Drawing group...');
    this.shapes.forEach(shape => shape.draw());
  }
}

// Usage example
const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

const group1 = new Group();
group1.addShape(circle);
group1.addShape(square);

const group2 = new Group();
group2.addShape(triangle);
group2.addShape(group1);

group2.draw(); // Output: "Drawing group...", "Drawing triangle...", "Drawing group...", "Drawing circle...", "Drawing square..."
```
In this example, we have four classes: Shape, Circle, Square, and Triangle, which represent individual shapes. We also have a Group class that represents a group of shapes. The Group class has an array of shapes and can add or remove shapes from it. The Group class also has a draw() method that calls the draw() method on all the shapes in the array.

When we create a new Group object and add shapes to it, we can call the draw() method on the group, and it will call the draw() method on all the shapes in the group, including other groups. This way, we can treat individual shapes and groups of shapes in the same way.

