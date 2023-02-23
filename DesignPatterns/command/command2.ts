interface CommandInt {
  execute: (orders: Order[], ...arg: any) => void;
}

class OrderManager {
  orders: Order[] = [];
  execute(command: CommandInt, arg: any) {
    console.log(this.orders);
    return command.execute(this.orders, arg);
  }
  getOrders() {
    return this.orders;
  }
}

class Order {
  constructor(public id: string) {}
}

class PlaceOrder implements CommandInt {
  execute(orders: Order[], orderId: string) {
    orders.push(new Order(orderId));
  }
}

class RmOrder implements CommandInt {
  execute(orders: Order[], orderId: string) {
    console.log(
      "rm",
      orders.filter((ord) => ord.id != orderId)
    );
    let index: any;
    orders.forEach((ord, i) => {
      if (ord.id == orderId) {
        index = i;
      }
    });
    orders.splice(index, 1);
  }
}

class TrackOrder implements CommandInt {
  execute(orders: Order[], orderId: string) {
    return orders.filter((ord) => ord.id == orderId[0]);
  }
}

let manager = new OrderManager();
manager.execute(new PlaceOrder(), "1");
console.log(manager.execute(new TrackOrder(), "1"));

manager.execute(new PlaceOrder(), "2");
manager.execute(new PlaceOrder(), "3");

console.log(manager.execute(new TrackOrder(), "3"));

manager.execute(new RmOrder(), "1");
console.log(manager.getOrders());
