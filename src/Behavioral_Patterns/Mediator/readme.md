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





