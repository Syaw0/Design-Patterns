# Mediator (intermediary , controller)


Imagine you and your friend are playing with toys, but you both want to play with the same toy at the same time. You start to argue and neither of you are having any fun anymore. 

A mediator is like a teacher or parent who comes over and helps you both share the toy. They might say something like, "okay, you can play with the toy for 5 minutes, and then it's your friend's turn for 5 minutes." 

In software, the mediator design pattern works similarly. It helps different parts of a program communicate with each other without directly talking to each other. Instead, they all communicate through a mediator object.

For example, let's say you have a program where different parts need to know about changes that happen to a user's account. Instead of each part directly asking the user's account for updates, they all go through a mediator object that keeps track of changes and notifies the necessary parts when something happens. This way, each part doesn't need to worry about how the other parts work, they just need to communicate with the mediator.


### How Its Work

```javascript
// First, we define our mediator object
class Mediator {
  constructor() {
    this.colleagues = []; // keeps track of all colleagues that need to communicate with each other
  }

  addColleague(colleague) {
    this.colleagues.push(colleague); // add a new colleague to the mediator's list
  }

  sendMessage(sender, message) {
    for (let colleague of this.colleagues) { // iterate through all colleagues and send the message to each one
      if (colleague !== sender) { // don't send the message back to the sender
        colleague.receiveMessage(message);
      }
    }
  }
}

// Next, we define our colleague objects
class Colleague {
  constructor(mediator) {
    this.mediator = mediator; // each colleague has a reference to the mediator object
  }

  sendMessage(message) {
    this.mediator.sendMessage(this, message); // send a message to all other colleagues through the mediator
  }

  receiveMessage(message) {
    console.log(`Received message: ${message}`); // do something with the received message
  }
}

// Finally, we create our objects and use them together
let mediator = new Mediator();

let colleague1 = new Colleague(mediator);
let colleague2 = new Colleague(mediator);

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);

colleague1.sendMessage("Hello, colleague 2!"); // send a message from colleague 1 to colleague 2
colleague2.sendMessage("Hi there, colleague 1!"); // send a message from colleague 2 to colleague 1
```

In this example, we have a `Mediator` object that keeps track of all `Colleague` objects that need to communicate with each other. Each `Colleague` object has a reference to the mediator object, and can send messages to other colleagues through the mediator. When a message is sent, the mediator object sends the message to all other colleagues except for the sender, and each colleague receives the message and does something with it (in this case, just logs it to the console).






### Use Case


Sure, here's another example of how the mediator pattern can be used in JavaScript:

Suppose you are building a chat application where users can send messages to each other. When a user sends a message, you want to make sure that the message is delivered to the correct recipient(s) without the sender having to know anything about the recipient(s). You can use the mediator pattern to achieve this.

Here's a code example that demonstrates this pattern:

```javascript
// Mediator object
const chatMediator = {
  users: {},

  // Add a user to the list of users
  addUser(user) {
    this.users[user.name] = user;
  },

  // Send a message from a sender to a recipient
  sendMessage(senderName, recipientName, message) {
    const recipient = this.users[recipientName];
    if (recipient) {
      recipient.receiveMessage(senderName, message);
    } else {
      console.log(`Recipient ${recipientName} not found`);
    }
  }
};

// User object
class User {
  constructor(name) {
    this.name = name;
    chatMediator.addUser(this);
  }

  // Send a message to a recipient
  sendMessage(recipientName, message) {
    chatMediator.sendMessage(this.name, recipientName, message);
  }

  // Receive a message from a sender
  receiveMessage(senderName, message) {
    console.log(`${this.name} received message from ${senderName}: ${message}`);
  }
}

// Create two users
const user1 = new User('Alice');
const user2 = new User('Bob');

// User 1 sends a message to user 2
user1.sendMessage('Bob', 'Hello from Alice!');

// User 2 sends a message to user 1
user2.sendMessage('Alice', 'Hi Alice, nice to meet you!');
```

In this example, the `chatMediator` object acts as a central hub for communication between the `User` objects. The `addUser` method adds a user to the list of users that the `chatMediator` manages, while the `sendMessage` method sends a message from a sender to a recipient.

Each `User` object has a `sendMessage` method that it can use to send messages to other users through the `chatMediator`. When a user receives a message, it logs the message to the console.



Note that, in this example, the `User` objects don't know anything about each other - they only interact with the `chatMediator`. This allows for a more decoupled design, where users can be added or removed without affecting the rest of the system. The `chatMediator` acts as a single point of contact between the `User` objects, and can manage the communication between them in a more organized and centralized way.




















