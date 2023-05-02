# One real-world example of the Decorator design pattern in Ruby is a logging decorator for a web application. This decorator adds logging functionality to an existing class without modifying its original code.

# Here's an example implementation:

ruby
class WebApp
  def initialize
    @routes = {}
  end

  def add_route(path, controller)
    @routes[path] = controller
  end

  def handle_request(path)
    if @routes.key?(path)
      @routes[path].call
    else
      "404 Not Found"
    end
  end
end

class LoggingDecorator
  def initialize(web_app)
    @web_app = web_app
  end

  def add_route(path, controller)
    puts "Adding route: #{path}"
    @web_app.add_route(path, controller)
  end

  def handle_request(path)
    puts "Handling request: #{path}"
    @web_app.handle_request(path)
  end
end


# In this implementation, the `WebApp` class represents a basic web application that stores routes and controllers in a hash and handles incoming requests by calling the appropriate controller.

# The `LoggingDecorator` class wraps the `WebApp` class and implements the same `add_route` and `handle_request` methods. It also adds logging functionality to these methods.

# When the `add_route` method is called on the decorator, it logs a message indicating that a new route has been added and calls the `add_route` method on the underlying web app.

# When the `handle_request` method is called on the decorator, it logs a message indicating that a request is being handled and calls the `handle_request` method on the underlying web app.

# This logging decorator can be used in web applications to add logging functionality to an existing class without modifying its original code. By wrapping the web app in a decorator, developers can easily add new features to the application without introducing bugs or breaking existing functionality.
