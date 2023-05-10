# Here is an example of the Command design pattern in Python:


# Command interface
class Command:
    def execute(self):
        pass

# Concrete command classes
class LightOnCommand(Command):
    def __init__(self, light):
        self.light = light
    
    def execute(self):
        self.light.switch_on()

class LightOffCommand(Command):
    def __init__(self, light):
        self.light = light
    
    def execute(self):
        self.light.switch_off()

# Receiver class
class Light:
    def switch_on(self):
        print("Light is switched on.")
    
    def switch_off(self):
        print("Light is switched off.")

# Invoker class
class RemoteControl:
    def __init__(self):
        self.commands = {}
    
    def set_command(self, button, command):
        self.commands[button] = command
    
    def press_button(self, button):
        if button in self.commands:
            self.commands[button].execute()

# Client code
light = Light()
light_on_command = LightOnCommand(light)
light_off_command = LightOffCommand(light)

remote_control = RemoteControl()
remote_control.set_command("ON", light_on_command)
remote_control.set_command("OFF", light_off_command)

remote_control.press_button("ON")
remote_control.press_button("OFF")


# In this example, the Command design pattern is used to control a light using a remote control. The `Command` interface defines the `execute` method which is implemented by concrete command classes (`LightOnCommand` and `LightOffCommand`). These commands encapsulate the receiver object (`Light`) and its methods (`switch_on` and `switch_off`). The `RemoteControl` class acts as an invoker which stores the commands and can execute them when a button is pressed. 

# This design pattern is useful in applications where we want to decouple the sender and receiver of a request, and enable the sender to choose which command to execute at runtime. In this example, the remote control can be easily extended to support more commands and receivers without changing the existing code.
