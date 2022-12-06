class Singleton {
  private static instance:Singleton
  private constructor() {
    
  }
  static getInstance(){
    if(!Singleton.instance){
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
  
}


const x = Singleton.getInstance()
const x2 = Singleton.getInstance()

console.log(x === x2) // true
