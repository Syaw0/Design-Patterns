
abstract class Transportation{
  abstract createDelivery():Delivery

  public someOp(){
    const product = this.createDelivery()
    console.log("creating this delivery",product.operation())
  }
  
}

class SeaTransport extends Transportation{
  createDelivery(): SeaDelivery {
    console.log('new sea transportation')
    return new SeaDelivery()
  }
}

class RoadTransport extends Transportation{
  createDelivery(): RoadDelivery {
    console.log('new road transportation')
    return new RoadDelivery()
  }
}

class AirTransport extends Transportation{
  createDelivery(): AirDelivery {
    return new AirDelivery()
  }
}


abstract class Delivery{
  abstract operation():string
}

class SeaDelivery extends Delivery{
  operation(): string {
    return 'sea delivery'
  }
}
class RoadDelivery extends Delivery{
  operation(): string {
    return 'road delivery'
  }
}

class AirDelivery extends Delivery{
  operation(): string {
    return 'air delivery'
  }
}


function client(creator:Transportation){
  creator.someOp()
}



// setTimeout(()=>{
//   client(new SeaTransport())
// },1000)


// setTimeout(()=>{
//   client(new RoadTransport())
// },4000)