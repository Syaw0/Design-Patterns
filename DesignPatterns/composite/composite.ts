interface Graphic {
  move(x: number, y: number): void;
  draw(): void;
}

class Dot implements Graphic {
  constructor(public x: number, public y: number) {}
  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`drawing dot shape on ${(this.x, this.y)} coordinate`);
  }
}

class CircleShape extends Dot {
  constructor(public x: number, public y: number, public radius: number) {
    super(x, y);
  }

  draw(): void {
    console.log(`drawing circle shape on ${(this.x, this.y)} coordinate`);
  }
}

class GraphicComposite implements Graphic {
  shapes: Graphic[];
  constructor() {
    this.shapes = [];
  }

  add(shape: Graphic) {
    this.shapes.push(shape);
  }

  remove(shape: Graphic) {
    this.shapes.filter((sh) => sh != shape);
  }

  draw(): void {
    this.shapes.forEach((sh) => {
      sh.draw();
    });
  }
  move(x: number, y: number): void {
    this.shapes.forEach((sh) => {
      sh.move(x, y);
    });
  }
}

class ImageEditor {
  composite: GraphicComposite;
  shapes: Graphic[];
  constructor() {
    this.composite = new GraphicComposite();
    this.shapes = [];
  }

  createShape(shape: Graphic) {
    this.shapes.push(shape);
  }

  groupedShape(shapes: Graphic[]) {
    shapes.forEach((sh) => {
      this.composite.add(sh);
    });
  }

  drawGrouped() {
    this.composite.draw();
  }
}

const imageEditor = new ImageEditor();
const circle = new CircleShape(1, 2, 1);
const circle2 = new CircleShape(2, 5, 2);
const dot = new Dot(2, 5);

imageEditor.groupedShape([dot, circle, circle2]);
imageEditor.drawGrouped();
