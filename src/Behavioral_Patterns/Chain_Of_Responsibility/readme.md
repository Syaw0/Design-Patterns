# Chain of Responsibility


The Chain of Responsibility is like a line of friends holding hands. If you want to give a message to the friend at the end of the line, you don't have to go all the way down to him. You can just pass the message to your nearest friend and he will pass it to his nearest friend and so on until it reaches the friend at the end of the line.

For example, let's say you want to ask your mom for permission to go play outside. But your mom is busy cooking in the kitchen and can't hear you. So you ask your older brother who is sitting nearby, "Can I go play outside?" Your brother knows your mom is busy, so he asks your dad who is in the next room, "Can my little brother go play outside?" Your dad knows your mom is busy too, so he goes to ask her, "Can our little one go play outside?" Finally, your mom says yes and your dad passes the message back to your brother who tells you, "You can go play outside now."

This is how the Chain of Responsibility works. It helps pass requests or tasks down a chain of objects until one of them can handle it.



### How Its Work



```javascript
// Define an interface for handling requests
interface Handler {
    setNext(handler: Handler): Handler;
    handleRequest(request: Request): void;
}

// Define a concrete handler class that implements the interface
class ConcreteHandlerA implements Handler {
    private nextHandler: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handleRequest(request: Request): void {
        if (request.condition == "condition A") {
            // Handle the request
        } else if (this.nextHandler) {
            // Pass the request to the next handler in the chain
            this.nextHandler.handleRequest(request);
        }
    }
}

// Define another concrete handler class that implements the interface
class ConcreteHandlerB implements Handler {
    private nextHandler: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handleRequest(request: Request): void {
        if (request.condition == "condition B") {
            // Handle the request
        } else if (this.nextHandler) {
            // Pass the request to the next handler in the chain
            this.nextHandler.handleRequest(request);
        }
    }
}

// Define a request object that will be passed down the chain
class Request {
    condition: string;
}

// Create a chain of handlers and set their order
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
handlerA.setNext(handlerB);

// Start the chain by passing a request to the first handler
const request = new Request();
request.condition = "condition B";
handlerA.handleRequest(request);
```



