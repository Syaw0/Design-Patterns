// Here is an example of the Bridge design pattern in TypeScript:

interface DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void;
}

class DrawingAPI1 implements DrawingAPI {
  public drawCircle(x: number, y: number, radius: number): void {
    console.log(`API1.circle at (${x},${y}) radius ${radius}`);
  }
}

class DrawingAPI2 implements DrawingAPI {
  public drawCircle(x: number, y: number, radius: number): void {
    console.log(`API2.circle at (${x},${y}) radius ${radius}`);
  }
}

abstract class Shape {
  protected drawingAPI: DrawingAPI;

  protected constructor(drawingAPI: DrawingAPI) {
    this.drawingAPI = drawingAPI;
  }

  public abstract draw(): void;
  public abstract resizeByPercentage(percentage: number): void;
}

class CircleShape extends Shape {
  private x: number;
  private y: number;
  private radius: number;

  constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public draw(): void {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }

  public resizeByPercentage(percentage: number): void {
    this.radius *= percentage / 100;
  }
}

const circle1 = new CircleShape(1, 2, 3, new DrawingAPI1());
circle1.draw(); // output: API1.circle at (1,2) radius 3

const circle2 = new CircleShape(5, 7, 11, new DrawingAPI2());
circle2.draw(); // output: API2.circle at (5,7) radius 11


// In this example, we have two classes that implement the `DrawingAPI` interface, which defines a method for drawing a circle. We then have an abstract `Shape` class that takes a `DrawingAPI` object in its constructor and defines abstract methods for drawing and resizing the shape. Finally, we have a concrete `CircleShape` class that extends `Shape` and implements the `draw` and `resizeByPercentage` methods.

// The `CircleShape` class uses the `drawingAPI` object to draw the circle and can be easily switched between different implementations of the `DrawingAPI` interface without affecting the rest of the code. This allows for greater flexibility and maintainability in applications that require different drawing APIs.
