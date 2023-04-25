

# Implementor interface
class Renderer
  def render_circle(x, y, radius)
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end
end

# Concrete Implementor classes
class VectorRenderer < Renderer
  def render_circle(x, y, radius)
    puts "Drawing a circle of radius #{radius} at (#{x},#{y}) using VectorRenderer"
  end
end

class RasterRenderer < Renderer
  def render_circle(x, y, radius)
    puts "Drawing a circle of radius #{radius} at (#{x},#{y}) using RasterRenderer"
  end
end

# Abstraction class
class Shape
  attr_reader :renderer

  def initialize(renderer)
    @renderer = renderer
  end

  def draw
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end

  def resize(factor)
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end
end

# Refined Abstraction classes
class Circle < Shape
  attr_reader :x, :y, :radius

  def initialize(renderer, x, y, radius)
    super(renderer)
    @x = x
    @y = y
    @radius = radius
  end

  def draw
    renderer.render_circle(x, y, radius)
  end

  def resize(factor)
    @radius *= factor
  end
end

# Client code
vector_renderer = VectorRenderer.new
circle = Circle.new(vector_renderer, 5, 10, 20)
circle.draw # Output: Drawing a circle of radius 20 at (5,10) using VectorRenderer

raster_renderer = RasterRenderer.new
circle.renderer = raster_renderer
circle.draw # Output: Drawing a circle of radius 20 at (5,10) using RasterRenderer


# In this example, we have two separate hierarchies - one for shapes and another for renderers. The Bridge design pattern allows us to combine these hierarchies in a flexible way, without creating a huge number of classes.

# The Renderer class is the implementor interface, which defines the render_circle method that the concrete implementor classes (VectorRenderer and RasterRenderer) must implement.

# The Shape class is the abstraction, which contains a reference to an object of type Renderer. The Circle class is the refined abstraction, which extends the Shape class and implements its own draw() and resize() methods. These methods use the render_circle() method from the Renderer object to draw the circle with the appropriate renderer.

# Finally, in the client code, we create instances of VectorRenderer and Circle, passing in the appropriate parameters. We then call the draw() method on each object, which returns a string describing the circle being drawn and its renderer. We also demonstrate the ability to switch renderers dynamically by changing the renderer attribute of the Circle object.

# This implementation allows us to easily add new shapes or renderers without having to modify existing classes. We can also reuse the same Renderer object across multiple shapes, which can be useful for performance or memory reasons.
