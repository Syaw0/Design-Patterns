class PhoneContext {
  constructor(public state: State | null) {}
  changeState(newState: State) {
    this.state = newState;
  }
  currentState() {
    console.log("this is current state : ", this.state?.description);
  }
  clickVolUp() {
    this.state?.clickVolUp();
  }
  clickPower() {
    this.state?.clickPower();
  }
  clickVolDown() {
    this.state?.clickVolDown();
  }
  doubleClickPower() {
    this.state?.doubleClickPower();
  }
  doubleClickVolUp() {
    this.state?.doubleClickVolUp();
  }
  doubleClickVolDown() {
    this.state?.doubleClickVolDown();
  }

  lockPhone() {
    this.changeState(new LockedState(this));
    console.log("lock Phone");
  }

  screenOff() {
    console.log("turn off screen");
  }

  screenOn() {
    console.log("turn on screen");
  }

  openCamera() {
    console.log("open camera");
  }

  openNumberPad() {
    console.log("open number pad");
  }
  openNote() {
    console.log("open note");
  }
  increaseVolume() {
    console.log("increase volume");
  }

  decreaseVolume() {
    console.log("decrease volume");
  }
  unlockPhone() {
    this.changeState(new UnlockedState(this));
    console.log("unlock phone");
  }
}

abstract class State {
  description: string = "";
  constructor(protected phone: PhoneContext) {}
  clickVolUp() {}
  clickPower() {}
  clickVolDown() {}
  doubleClickPower() {}
  doubleClickVolUp() {}
  doubleClickVolDown() {}
}

class LockedState extends State {
  description: string = "locked state";
  clickPower(): void {
    this.phone.screenOn();
  }
  clickVolUp() {
    //nothing to do
  }
  clickVolDown() {
    //nothing to do
  }
  doubleClickPower() {
    // this.phone.openCamera();
    this.phone.unlockPhone();
  }
  doubleClickVolUp() {
    this.phone.openNumberPad();
  }
  doubleClickVolDown() {
    this.phone.openNote();
  }
}

class UnlockedState extends State {
  description: string = "unlocked state";
  clickPower(): void {
    this.phone.lockPhone();
  }
  clickVolUp() {
    this.phone.increaseVolume();
  }
  clickVolDown() {
    this.phone.decreaseVolume();
  }
  doubleClickPower() {
    this.phone.lockPhone();
  }
  doubleClickVolUp() {
    this.phone.increaseVolume();
    this.phone.increaseVolume();
  }
  doubleClickVolDown() {
    this.phone.decreaseVolume();
    this.phone.decreaseVolume();
  }
}

let phone = new PhoneContext(null);
let screenOffState = new LockedState(phone);
phone.changeState(screenOffState);

phone.currentState();
phone.clickPower();
phone.currentState();
phone.doubleClickPower();
phone.currentState();
phone.clickPower();
phone.currentState();
