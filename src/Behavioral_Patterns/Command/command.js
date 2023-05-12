// One real world example of the Command design pattern in JavaScript is a remote control for a TV. In this application, the user can use the remote control to turn the TV on/off, change channels, adjust the volume, and perform other actions.

// To implement the Command design pattern in this application, we can create a Command interface that defines a method called execute(). This interface will be implemented by various concrete command classes like PowerCommand, ChannelCommand, VolumeCommand, and MuteCommand.

// Each concrete command class will have its own execute() method that will perform a specific action on the TV. For example, the PowerCommand class will have an execute() method that will turn the TV on or off.

// We can also create a Invoker class that will invoke the execute() method of the concrete command classes based on the user's input. This Invoker class can have a method called setCommand() that will set the concrete command class based on the user's input.

// Here's an example code snippet that demonstrates the Command design pattern in JavaScript for a remote control application:


// Command interface
class Command {
  execute() {}
}

// Concrete command classes
class PowerCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.togglePower();
  }
}

class ChannelCommand extends Command {
  constructor(tv, channel) {
    super();
    this.tv = tv;
    this.channel = channel;
  }

  execute() {
    this.tv.changeChannel(this.channel);
  }
}

class VolumeCommand extends Command {
  constructor(tv, volume) {
    super();
    this.tv = tv;
    this.volume = volume;
  }

  execute() {
    this.tv.adjustVolume(this.volume);
  }
}

class MuteCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.toggleMute();
  }
}

// Invoker class
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Usage
class TV {
  constructor() {
    this.power = false;
    this.channel = 1;
    this.volume = 50;
    this.mute = false;
  }

  togglePower() {
    this.power = !this.power;
    console.log(`TV is now ${this.power ? 'on' : 'off'}`);
  }

  changeChannel(channel) {
    this.channel = channel;
    console.log(`Changed to channel ${this.channel}`);
  }

  adjustVolume(volume) {
    this.volume = volume;
    console.log(`Volume is now ${this.volume}`);
  }

  toggleMute() {
    this.mute = !this.mute;
    console.log(`Mute is now ${this.mute ? 'on' : 'off'}`);
  }
}

const tv = new TV();
const remote = new RemoteControl();

remote.setCommand(new PowerCommand(tv));
remote.pressButton(); // Output: TV is now on

remote.setCommand(new ChannelCommand(tv, 3));
remote.pressButton(); // Output: Changed to channel 3

remote.setCommand(new VolumeCommand(tv, 70));
remote.pressButton(); // Output: Volume is now 70

remote.setCommand(new MuteCommand(tv));
remote.pressButton(); // Output: Mute is now on


// In this example, we have implemented the Command design pattern to create a remote control application for a TV. The concrete command classes (PowerCommand, ChannelCommand, VolumeCommand, and MuteCommand) perform specific actions on the TV and the Invoker class (RemoteControl) invokes the execute() method of the concrete command classes based on the user's input. This way, we can easily add new actions to the remote control without modifying the existing code.
