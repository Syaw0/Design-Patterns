abstract class FurnitureFactory{
  abstract createChair():Chair;
  abstract createCoffeeTable():CoffeeTable;
  abstract createSofa():Sofa;
}

class VictorianFurniture extends FurnitureFactory{
  createChair() {
    return new VictorianChair()
  }

  createCoffeeTable() {
    return new VictorianCoffeeTable()
  }

  createSofa() {
    return new VictorianSofa()
  }
}

class ArtDecoFurniture extends FurnitureFactory{
  createChair() {
    return new ArtDecoChair()
  }
  createCoffeeTable() {
    return new ArtDecoCoffeeTable()
  }

  createSofa() {
    return new ArtDecoSofa()
  }
}

class ModernFurniture extends FurnitureFactory{
  createChair() {
    return new ModernChair()
  }
  createCoffeeTable() {
    return new ModernCoffeeTable()
  }

  createSofa() {
  return new ModernSofa()
  }
}



abstract class Chair {
}


class ModernChair extends Chair{
  
}

class VictorianChair extends Chair{
  
}

class ArtDecoChair extends Chair{
  
}



abstract class CoffeeTable {
}


class ModernCoffeeTable extends CoffeeTable{
  
}

class VictorianCoffeeTable extends CoffeeTable{
  
}

class ArtDecoCoffeeTable extends CoffeeTable{
  
}


abstract class Sofa{
}


class ModernSofa extends Sofa{
  
}

class VictorianSofa extends Sofa{
  
}

class ArtDecoSofa extends Sofa{
  
}








