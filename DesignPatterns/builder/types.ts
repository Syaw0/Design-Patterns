export type HomeRoofType =  "modern" | "classic"
export type HomeWallsType =  "modern" | "classic"

export type HomeStructure = {
  Doors?:number;
  garage?:boolean;
  window?:number;
  Roof?: HomeRoofType;
  swimPool?:boolean;
  garden?:boolean;
  walls?:HomeWallsType

}