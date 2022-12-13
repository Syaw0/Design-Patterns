import { Map } from "../../../../node_modules/typescript/lib/typescript";

interface Shape2 {
  draw(): void;
  setX(x: number): void;
  setY(y: number): void;
  setRadius(rad: number): void;
}

class Circle2 implements Shape2 {
  private x: number = 0;
  private y: number = 0;
  private radius: number = 0;
  constructor(public color: string) {}

  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }

  setRadius(rad: number) {
    this.radius = rad;
  }

  draw(): void {
    console.log(
      `this is circle with ${this.color} color and x : ${this.x}  and y : ${this.y} and radius is ${this.radius}`
    );
  }
}

class ShapeFactory {
  private static circleMapObject: Map<Shape2> = new Map();

  static getCircle(color: string) {
    let result = this.circleMapObject.get(color);
    if (result != undefined) {
      return result;
    } else {
      let newCircle = new Circle2(color);
      this.circleMapObject.set(color, newCircle);
      return newCircle;
    }
  }
}

let myBlueCircle = ShapeFactory.getCircle("blue");
myBlueCircle.setX(23);
console.log(myBlueCircle);

let myRedCircle = ShapeFactory.getCircle("red");
myRedCircle.setRadius(23);
console.log(myRedCircle);

let myOtherBlueCircle = ShapeFactory.getCircle("blue");
console.log(myOtherBlueCircle);
