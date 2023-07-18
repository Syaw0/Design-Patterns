interface Cloneable {
  clone(): Cloneable;
}

// Concrete prototype class
class Sheep implements Cloneable {
  constructor(public name: string, public age: number) {}

  clone(): Sheep {
    return new Sheep(this.name, this.age);
  }
}

// Client code
const originalSheep = new Sheep("Dolly", 2);
console.log(originalSheep);

const clonedSheep = originalSheep.clone();
clonedSheep.name = "Molly";
console.log(clonedSheep);
