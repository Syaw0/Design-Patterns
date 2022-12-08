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
