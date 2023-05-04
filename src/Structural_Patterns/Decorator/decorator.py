# One real world example of the Decorator design pattern in Python is the use of decorators in web frameworks such as Flask or Django. Decorators are used to modify the behavior of a function or a class in a non-intrusive way.

# For example, in Flask, the `@app.route` decorator is used to define a route for a web application. This decorator takes a URL pattern as an argument and returns a function that handles the request for that URL.


from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, world!'


# In this example, the `@app.route` decorator is used to define a route for the root URL (`/`). The `index` function is decorated with `@app.route('/')`, which means that it will be called when a request is made to the root URL.

# Another example of the Decorator pattern in Python is the use of decorators to add functionality to a class. For example, the `@property` decorator can be used to define a read-only property on a class.

python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name


# In this example, the `@property` decorator is used to define a read-only property `name` on the `Person` class. This allows users of the class to access the `name` attribute without being able to modify it directly.

# Overall, the Decorator design pattern is useful in Python applications for adding functionality to functions or classes in a non-intrusive way. It allows for easy modification and extension of existing code without having to modify the original source code.
