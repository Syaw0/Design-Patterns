# Command (action , Transaction)



The command design pattern is like giving your little brother a list of things to do. You tell him what to do, but he decides when to do it. 

Let's say you want your little brother to clean his room, feed the cat, and take out the trash. You could give him a list of commands like this:

1. Clean your room.
2. Feed the cat.
3. Take out the trash.

Your little brother can then decide when to do each task, and he can even choose to do them in a different order if he wants. 

In the same way, the command design pattern is a way for a program to give a list of commands to an object, and the object can decide when and how to execute those commands. 

For example, let's say you have a program that controls a robot. You could create a list of commands for the robot to follow, like this:

1. Move forward.
2. Turn left.
3. Move forward.
4. Turn right.
5. Move forward.

The robot object can then execute each command in the list, in the order they were given. 

The command design pattern is useful because it allows you to separate the code that gives the commands from the code that executes them. This makes it easier to add new commands or change the order of existing ones, without having to modify the code that executes them.



### How Its Work

```javascript
// Define the Command interface
class Command {
  execute() {}
}

// Define the Invoker class
class Invoker {
  constructor() {
    this.commands = 
  }

  addCommand(command) {
    this.commands.push(command)
  }

  executeCommands() {
    for (let command of this.commands) {
      command.execute()
    }
    this.commands = 
  }
}

// Define some Concrete Command classes
class ConcreteCommand1 extends Command {
  constructor(receiver) {
    super()
    this.receiver = receiver
  }

  execute() {
    this.receiver.doSomething()
  }
}

class ConcreteCommand2 extends Command {
  constructor(receiver) {
    super()
    this.receiver = receiver
  }

  execute() {
    this.receiver.doSomethingElse()
  }
}

// Define the Receiver class
class Receiver {
  doSomething() {}
  doSomethingElse() {}
}

// Create some Concrete Receivers
const receiver1 = new Receiver()
const receiver2 = new Receiver()

// Create some Concrete Commands and associate them with Receivers
const command1 = new ConcreteCommand1(receiver1)
const command2 = new ConcreteCommand2(receiver2)

// Create an Invoker and add some Commands to it
const invoker = new Invoker()
invoker.addCommand(command1)
invoker.addCommand(command2)

// Execute the Commands
invoker.executeCommands()

```



### Use Case


One example of Command design pattern in JavaScript is implementing an undo/redo functionality in a text editor. 

The Command pattern suggests encapsulating a request as an object, thereby allowing for the parameterization of clients with different requests, queue or log requests, and support undoable operations. 

Here's a sample code snippet:
```javascript
class TextEditor {
  constructor() {
    this.text = '';
    this.history = [];
    this.cursor = 0;
  }

  executeCommand(command) {
    command.execute();
    this.history.push(command);
    this.cursor++;
  }

  undo() {
    if (this.cursor > 0) {
      this.cursor--;
      this.history[this.cursor].undo();
    }
  }

  redo() {
    if (this.cursor < this.history.length) {
      this.history[this.cursor].execute();
      this.cursor++;
    }
  }
}

class AddTextCommand {
  constructor(editor, text) {
    this.editor = editor;
    this.text = text;
  }

  execute() {
    this.editor.text += this.text;
  }

  undo() {
    this.editor.text = this.editor.text.slice(0, -this.text.length);
  }
}

class DeleteTextCommand {
  constructor(editor, length) {
    this.editor = editor;
    this.length = length;
    this.deletedText = '';
  }

  execute() {
    this.deletedText = this.editor.text.slice(-this.length);
    this.editor.text = this.editor.text.slice(0, -this.length);
  }

  undo() {
    this.editor.text += this.deletedText;
  }
}

const editor = new TextEditor();

editor.executeCommand(new AddTextCommand(editor, 'Hello')); // add 'Hello' to text
editor.executeCommand(new AddTextCommand(editor, ' World')); // add ' World' to text
console.log(editor.text); // output: 'Hello World'

editor.executeCommand(new DeleteTextCommand(editor, 6)); // delete ' World' from text
console.log(editor.text); // output: 'Hello'

editor.undo(); // undo the last command (delete)
console.log(editor.text); // output: 'Hello World'

editor.redo(); // redo the last command (delete)
console.log(editor.text); // output: 'Hello'

```
In this example, the TextEditor class is the receiver that executes commands. The AddTextCommand and DeleteTextCommand classes are concrete commands that encapsulate the request to add or delete text. 

The executeCommand, undo, and redo methods of the TextEditor class implement the command queue and undo/redo functionality. 

By using the Command pattern, we can easily add new commands to the text editor without modifying the TextEditor class. We can also log or queue commands for later execution.

























