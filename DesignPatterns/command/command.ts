interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  constructor(private payload: string) {}

  execute(): void {
    console.log(`this is simple command with some payload :${this.payload}`);
  }
}

class ComplexCommand implements Command {
  constructor(
    private receiver: Receiver,
    private a: string,
    private b: string
  ) {}
  execute(): void {
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

class Receiver {
  doSomething(a: string) {
    console.log(`receiver work ... receiving:${a}`);
  }
  doSomethingElse(b: string) {
    console.log(`receiver2 work ... receiving:${b}`);
  }
}

class Invoker {
  private onStart!: Command;
  private onFinish!: Command;

  setOnStart(command: Command) {
    this.onStart = command;
  }

  setOnFinish(command: Command) {
    this.onFinish = command;
  }

  doSomethingImportant() {
    console.log("check for onStart ...");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("some operation ...");

    console.log("before leave is it something invoker call?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  isCommand(obj: Command): obj is Command {
    return obj.execute !== undefined;
  }
}

const inv = new Invoker();
inv.setOnStart(new SimpleCommand("hello men !"));
const receiver = new Receiver();
inv.setOnFinish(new ComplexCommand(receiver, "first a", "last b"));
inv.doSomethingImportant();
