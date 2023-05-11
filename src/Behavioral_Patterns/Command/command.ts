
interface Command {
  execute(): void;
  undo(): void;
}

class Calculator {
  private currentValue: number = 0;

  add(value: number) {
    this.currentValue += value;
  }

  subtract(value: number) {
    this.currentValue -= value;
  }

  getCurrentValue() {
    return this.currentValue;
  }
}

class AddCommand implements Command {
  private calculator: Calculator;
  private value: number;

  constructor(calculator: Calculator, value: number) {
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.add(this.value);
  }

  undo() {
    this.calculator.subtract(this.value);
  }
}

class SubtractCommand implements Command {
  private calculator: Calculator;
  private value: number;

  constructor(calculator: Calculator, value: number) {
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.subtract(this.value);
  }

  undo() {
    this.calculator.add(this.value);
  }
}

class Invoker {
  private commands: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.commands.push(command);
  }

  undoLastCommand() {
    const lastCommand = this.commands.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }
}

const calculator = new Calculator();
const addCommand1 = new AddCommand(calculator, 5);
const addCommand2 = new AddCommand(calculator, 10);
const subtractCommand = new SubtractCommand(calculator, 3);

const invoker = new Invoker();
invoker.executeCommand(addCommand1);
invoker.executeCommand(subtractCommand);
invoker.executeCommand(addCommand2);

console.log(calculator.getCurrentValue()); // Output: 12

invoker.undoLastCommand();
console.log(calculator.getCurrentValue()); // Output: 9

invoker.undoLastCommand();
console.log(calculator.getCurrentValue()); // Output: 5

invoker.undoLastCommand();
console.log(calculator.getCurrentValue()); // Output: 0


// In this example, the Command design pattern is used to perform addition and subtraction operations on a `Calculator` object with an `Invoker`. The `Command` interface defines the `execute()` and `undo()` methods that all commands must implement.

// The `Calculator` class has methods to add and subtract values and a method to get the current value. The `AddCommand` and `SubtractCommand` classes implement the `Command` interface and use the `Calculator` object to perform addition and subtraction operations.

// The `Invoker` class has an array of `Command` objects and methods to execute commands and undo the last command. When a command is executed, it is added to the array of commands. When the last command is undone, it is removed from the array and its `undo()` method is called to reverse the operation.

// This example demonstrates how the Command design pattern can be used to implement undo-redo functionality in an application by keeping track of executed commands and their inverse operations.
