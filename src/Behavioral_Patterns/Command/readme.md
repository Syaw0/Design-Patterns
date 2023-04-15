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

```
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








