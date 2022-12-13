import { Map } from "../../../../node_modules/typescript/lib/typescript";

class TreeType {
  constructor(
    public name: string,
    public texture: string,
    public color: string
  ) {}
  draw(canvas: string, x: number, y: number) {
    console.log(`
    tree name is : ${this.name} texture is : ${this.texture} color is : ${this.color}
    `);
  }
}

class TreeFactory {
  static mapTree: Map<TreeType> = new Map();
  static getTreeType(name: string, color: string, texture: string) {
    let result = this.mapTree.get(`${name}:${color}:${texture}`);
    if (result != undefined) {
      return result;
    } else {
      let newTreeType = new TreeType(name, color, texture);
      this.mapTree.set(`${name}:${color}:${texture}`, newTreeType);
      return newTreeType;
    }
  }
}

class Tree {
  constructor(public x: number, public y: number, public type: TreeType) {}
  draw(canvas: string) {
    this.type.draw(canvas, this.x, this.y);
  }
}

class Forest {
  trees: Tree[] = [];
  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ) {
    let type = TreeFactory.getTreeType(name, color, texture);
    let tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw(canvas: string) {
    this.trees.forEach((tree) => {
      tree.draw(canvas);
    });
  }
}

let forest = new Forest();
forest.plantTree(0, 0, "Coniferous", "dark green", "someTexture");
forest.draw("myCanvas");

forest.plantTree(1, 2, "Deciduous", "green", "someTexture2");
forest.draw("myCanvas");
