// Consider this example...

class SomeButton {
  constructor(public fan: Fan) {}
  press() {
    if (this.fan.isOn) {
      console.log("button pressed to turn off");
      this.fan.turnOff();
    } else {
      console.log("button pressed to turn on");
      this.fan.turnOn();
    }
  }
}

class Fan {
  public isOn: boolean = false;
  constructor(public powerSupplier: PowerSupplier) {}
  turnOff() {
    console.log("turning off fan");
    this.powerSupplier.turnOff();
    this.isOn = false;
  }
  turnOn() {
    console.log("turning on fan");
    this.powerSupplier.turnOn();
    this.isOn = true;
  }
}

class PowerSupplier {
  turnOn() {
    console.log("turn on power supplier");
  }
  turnOff() {
    console.log("turn off power supplier");
  }
}

const power = new PowerSupplier();
const fan = new Fan(power);
const fanBtn = new SomeButton(fan);

// fanBtn.press();
// fanBtn.press();

// Output:
// button pressed to turn on
// turning on fan
// turn on power supplier
// button pressed to turn off
// turning off fan
// turn off power supplier

// ! But what is wrong with this functionality?
// ? if you notice all classes tightly coupled together
// ? the button interact with fan and fan interact with PowerSupplier
// ! so we can not reuse button in other module...
// ! and if we want to add more power supply we must change fan logic!

// * what we can do ? USE MEDIATOR

class Mediator {
  private button!: SomeButton2;
  private fan!: Fan2;
  private powerSupplier!: PowerSupplier2;

  registerButton(btn: SomeButton2) {
    this.button = btn;
  }
  registerFan(fan: Fan2) {
    this.fan = fan;
  }
  registerPowerSupplier(pw: PowerSupplier2) {
    this.powerSupplier = pw;
  }

  press() {
    if (this.fan.isOn) {
      this.fan.turnOff();
    } else {
      this.fan.turnOn();
    }
  }
  start() {
    this.powerSupplier.turnOn();
  }
  stop() {
    this.powerSupplier.turnOff();
  }
}

class SomeButton2 {
  constructor(public med: Mediator) {}
  press() {
    this.med.press();
  }
}

class Fan2 {
  public isOn: boolean = false;
  constructor(public med: Mediator) {}
  turnOff() {
    console.log("turning off fan");
    this.med.stop();
    this.isOn = false;
  }
  turnOn() {
    console.log("turning on fan");
    this.med.start();
    this.isOn = true;
  }
}

class PowerSupplier2 {
  turnOn() {
    console.log("turn on power supplier");
  }
  turnOff() {
    console.log("turn off power supplier");
  }
}

// lets test it...

const mediator = new Mediator();
const button = new SomeButton2(mediator);
const fan2 = new Fan2(mediator);
const power2 = new PowerSupplier2();

mediator.registerButton(button);
mediator.registerFan(fan2);
mediator.registerPowerSupplier(power2);

button.press();
button.press();
// now all components talk to mediator not together this has several benefits:
// * All component just have single reference to mediator
// * and they not coupled together we can define and register any other component...
