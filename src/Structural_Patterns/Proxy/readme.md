# Proxy Pattern

The proxy design pattern is like having a big sister or big brother who looks out for you and helps you when you need it. 

Imagine that you are going to the playground to play, but your parents are worried about your safety. They ask your older sister to come with you and be your proxy or guardian. 

Your sister makes sure that you don't get hurt or lost, and helps you if you need anything. She acts as an intermediary, representing your parents' interests and making sure that you are safe.

In software development, the proxy design pattern is used to control access to an object or resource. For example, imagine that you have a web application that needs to access a database. Instead of letting the application access the database directly, you can create a proxy object that stands between the application and the database.

The proxy object can control access to the database, by checking if the user has the necessary permissions, and by caching frequently accessed information to improve performance. The proxy object also hides complex implementation details from the application, making it simpler to use.

So, a proxy design pattern is like having a guardian or intermediary that represents your interests and controls your access to resources.


### How Its Work?

Here's an example of implementing the Proxy design pattern in JavaScript:

```javascript
// Define a subject (the actual object that the proxy will represent)
class RealSubject {
  request() {
    console.log('RealSubject: Handling request.');
  }
}

// Define a proxy class that implements the same interface as the subject
class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logRequest();
    }
  }

  checkAccess() {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  logRequest() {
    console.log('Proxy: Logging the time of request.');
  }
}

// Create the real object
const realSubject = new RealSubject();

// Create the proxy object, passing in the real object as a parameter
const proxy = new Proxy(realSubject);

// Call the request method on the proxy object (the proxy will handle the request)
proxy.request();
```

In this example, we have a `RealSubject` class that represents the actual object that we want to access. We then define a `Proxy` class that has a reference to the `RealSubject` object.

The `Proxy` class also implements the same interface as the `RealSubject` class, and it provides additional functionality such as checking access before firing a real request and logging the time of request.

When we create a `Proxy` object, we pass in the `RealSubject` object as a parameter. We then call the `request` method on the `Proxy` object, and the `Proxy` object handles the request by first checking access and logging the time of request, and then passing the request on to the `RealSubject` object.
