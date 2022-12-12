interface Notifier {
  send(): void;
}

class SimpleNotifier implements Notifier {
  send(): void {
    console.log("browser notif");
  }
}

abstract class NotifierDecorator implements Notifier {
  constructor(public wrapper: Notifier) {}
  send(): void {
    this.wrapper.send();
  }
}

class FacebookDecorator extends NotifierDecorator {
  constructor(public wrapper: Notifier) {
    super(wrapper);
  }
  send(): void {
    this.wrapper.send();
    console.log("sending to facebook");
  }
}

class StackDecorator extends NotifierDecorator {
  constructor(public wrapper: Notifier) {
    super(wrapper);
  }
  send(): void {
    this.wrapper.send();
    console.log("sending to stack");
  }
}

class EmailDecorator extends NotifierDecorator {
  constructor(public wrapper: Notifier) {
    super(wrapper);
  }
  send(): void {
    this.wrapper.send();
    console.log("sending to email");
  }
}

let x1 = new SimpleNotifier();
x1 = new FacebookDecorator(x1);
x1 = new StackDecorator(x1);
x1 = new EmailDecorator(x1);
x1.send();
