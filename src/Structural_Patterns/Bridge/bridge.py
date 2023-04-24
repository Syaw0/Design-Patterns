

from abc import ABC, abstractmethod

# Abstraction class
class Shape(ABC):
    def __init__(self, color):
        self.color = color

    @abstractmethod
    def draw(self):
        pass

# Implementor interface
class Color(ABC):
    @abstractmethod
    def fill(self):
        pass

# Concrete Implementor classes
class Red(Color):
    def fill(self):
        return "Red"

class Blue(Color):
    def fill(self):
        return "Blue"

# Refined Abstraction classes
class Square(Shape):
    def draw(self):
        return f"Drawing a {self.color.fill()} square."

class Circle(Shape):
    def draw(self):
        return f"Drawing a {self.color.fill()} circle."

# Client code
square_red = Square(Red())
print(square_red.draw())  # Output: Drawing a Red square.

circle_blue = Circle(Blue())
print(circle_blue.draw())  # Output: Drawing a Blue circle.


# In this example, we have two separate hierarchies - one for shapes and another for colors. The Bridge design pattern allows us to combine these hierarchies in a flexible way, without creating a huge number of classes.

# The Shape class is the abstraction, which contains a reference to an object of type Color. The Color class is the implementor interface, which defines the methods that the concrete implementor classes (Red and Blue) must implement.

# The Square and Circle classes are the refined abstractions, which extend the Shape class and implement their own draw() method. These classes use the fill() method from the Color object to determine the color of the shape being drawn.

# Finally, in the client code, we create instances of Square and Circle, passing in the appropriate Color object. We then call the draw() method on each object, which returns a string describing the shape being drawn and its color.

# This implementation allows us to easily add new shapes or colors without having to modify existing classes. We can also reuse the same Color object across multiple shapes, which can be useful for performance or memory reasons.
