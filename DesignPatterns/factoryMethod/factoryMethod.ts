abstract class Transportation {
  abstract createDelivery():Delivery;
}


class AirTransport extends Transportation{
  createDelivery(): Delivery {
    return new AirDelivery()
  }
}

class RoadTransport extends Transportation{
  createDelivery(): Delivery {
    return new RoadDelivery()
  }
}



abstract class Delivery{

}

class AirDelivery extends Delivery{

}

class RoadDelivery extends Delivery{

}