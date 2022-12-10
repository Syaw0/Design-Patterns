abstract class Shape {
  x: number;
  y: number;
  color: string;

  constructor(source: Shape) {
    this.x = source.x;
    this.y = source.y;
    this.color = source.color;
  }

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(source: Rectangle) {
    super(source);
    this.width = source.width;
    this.height = source.height;
  }

  clone(): Rectangle {
    return new Rectangle(this);
  }
}

class Circle extends Shape {
  radius: number;
  constructor(source: Circle) {
    super(source);
    this.radius = source.radius;
  }

  clone(): Circle {
    return new Circle(this);
  }
}
