// class Circle{
//   // do stuff
// }

// class Triangle{
//   // do ...
// }

// class BlackTriangle{
//   // do ...
// }

// class RedCircle{

// }

// ! as you can see we are implement two dimension combining together
// ! this pattern will make you to create a lot of classes and make a code so dirty
// ? to handle this we need separate two independent dimension to an abstraction and implementation
// * we just create an MyShape and ColorFull class and just you can see the difference
// * we don not need to create a huge subclasses and classes just instance :)

class MyShape {
  constructor(public shape: string, public color?: ColorFull) {}

  show() {
    return `shape is :${this.shape} and color is :${
      this.color != null ? this.color.color : "no color"
    }`;
  }
}

class ColorFull {
  constructor(public color: string) {}
}

const color1 = new ColorFull("Black");
const myShape1 = new MyShape("Triangle", color1);
const myShape2 = new MyShape("Circle");
console.log(myShape1.show());
console.log(myShape2.show());
