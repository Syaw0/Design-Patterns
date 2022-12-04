abstract class HousePlan{
  abstract setBasement(basement:string):void
  abstract setRoof(roof:string):void
  abstract setStructure(structure:string):void
  abstract setInterior(interior:string):void
}


class House implements HousePlan{

  private basement:string = ""
  private roof:string = ""
  private structure:string = ""
  private interior:string = ""

  setBasement(basement: string): void {
    this.basement = basement
  }

  setInterior(interior: string): void {
    this.interior = interior
  }

  setRoof(roof: string): void {
    this.roof = roof
  }

  setStructure(structure: string): void {
    this.structure = structure
  }

}

interface HouseBuilder{
  buildBasement():void;
  buildRoof():void;
  buildInterior():void;
  buildStructure():void;
  getHouse():House
}

class IglooHouseBuilder implements HouseBuilder{
  private house:House
  constructor() {
    this.house = new House()
  }

  buildBasement(){
    this.house.setBasement("ice Bars")
  }

  buildInterior(){
    this.house.setInterior('ice Carving')
  }

  buildRoof(){
    this.house.setRoof('ice Dome')
  }

  buildStructure(){
    this.house.setStructure('ice Blocks')
  }

  getHouse(): House {
    return this.house
  }

}


class TipiHouseBuilder implements HouseBuilder{
  private house:House
  constructor() {
    this.house = new House()
  }
  buildBasement(){
    this.house.setBasement("woden poles")
  }

  buildInterior(){
    this.house.setInterior('wood and ice')
  }

  buildRoof(){
    this.house.setRoof('fire wood')
  }

  buildStructure(){
    this.house.setStructure('Wood, caribou and seal skins')
  }

  getHouse(): House {
    return this.house
  }

}

class CivilEngineer {
  constructor(
    public houseBuilder:HouseBuilder
    ) {
    this.houseBuilder = houseBuilder
  }
  getHouse(){
    return this.houseBuilder.getHouse()
  }
  construct(){
    this.houseBuilder.buildBasement()
    this.houseBuilder.buildInterior()
    this.houseBuilder.buildRoof()
    this.houseBuilder.buildStructure()
  }
  newProject(houseBuilder:HouseBuilder){
    this.houseBuilder = houseBuilder
  }
}

const engineer = new CivilEngineer(new IglooHouseBuilder())
engineer.construct()
console.log(engineer.getHouse())

engineer.newProject(new TipiHouseBuilder())
engineer.construct()
console.log(engineer.getHouse())
