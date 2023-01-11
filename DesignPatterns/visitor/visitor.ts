interface SHAPE {
  move(x: number, y: number): void;
  draw(): void;
  accept(v: Visitor): void;
}

class Pentagon implements SHAPE {
  move(x: number, y: number): void {}

  draw(): void {}

  accept(v: Visitor): void {
    v.visitPentagon(this);
  }
}

class Trapeze implements SHAPE {
  move(x: number, y: number): void {}

  draw(): void {}

  accept(v: Visitor): void {
    v.visitTrapeze(this);
  }
}

class Octagonal implements SHAPE {
  move(x: number, y: number): void {}

  draw(): void {}

  accept(v: Visitor): void {
    v.visitOctagonal(this);
  }
}

interface Visitor {
  visitPentagon(p: Pentagon): void;
  visitOctagonal(o: Octagonal): void;
  visitTrapeze(t: Trapeze): void;
}

class XMLExportVisitor implements Visitor {
  visitOctagonal(o: Octagonal): void {
    console.log("export to XML Octagonal");
  }
  visitPentagon(p: Pentagon): void {
    console.log("export to XML Pentagon");
  }
  visitTrapeze(t: Trapeze): void {
    console.log("export to XML Trapeze");
  }
}

class App {
  allShape: SHAPE[] = [];
  addShape(shape: SHAPE[]) {
    this.allShape.push(...shape);
  }

  export() {
    this.allShape.forEach((sh) => {
      sh.accept(new XMLExportVisitor());
    });
  }
}

let app = new App();
app.addShape([new Pentagon(), new Pentagon(), new Trapeze()]);
app.export();
