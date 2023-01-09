type location = {
  x: number;
  y: number;
};

// * STRATEGY!
// * WHAT IS FOR ?
// imagine we have a routing app that build route for
// users to navigate to the target position
// we must support all type of usages! we can not build highway route for
// bicycle! for that we do this:

// first build context that hold strategy to build route!

class RouterContext {
  constructor(private strategy: Strategy) {}
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  buildRoute(start: location, end: location) {
    this.strategy.buildRoute(start, end);
  }
}

interface Strategy {
  buildRoute(start: location, end: location): void;
}

// then define all strategies in classes

class CarStrategy implements Strategy {
  buildRoute(start: location, end: location): void {
    console.log(
      `build route for Car driving\nstart location is ${start.x}:${start.y} TO ${end.x}:${end.y}\n`
    );
  }
}

class BicycleStrategy implements Strategy {
  buildRoute(start: location, end: location): void {
    console.log(
      `build route for Bicycle\nstart location is ${start.x}:${start.y} TO ${end.x}:${end.y}\n `
    );
  }
}

class WalkingStrategy implements Strategy {
  buildRoute(start: location, end: location): void {
    console.log(
      `build route for walking\nstart location is ${start.x}:${start.y} TO ${end.x}:${end.y}\n`
    );
  }
}

// now test it

const context = new RouterContext(new WalkingStrategy());
// here we build route for walking!
context.buildRoute({ x: 0, y: 0 }, { x: 100, y: -111 });

context.setStrategy(new CarStrategy());
// and for coming back we build route for car driving
context.buildRoute({ x: 100, y: -111 }, { x: 0, y: 0 });
