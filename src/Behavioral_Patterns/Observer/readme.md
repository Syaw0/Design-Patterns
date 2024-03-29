# Observer (Event-Subscriber , Listener)


Sure! The observer design pattern is like having a baby monitor. 

Imagine you are a baby, and your parents want to be able to take care of you but still move around the house. They set up a baby monitor that stays with you, and a device that they can carry around with them. 

Whenever you cry or need your parents, they can hear you through the baby monitor and come to help you. The device that your parents carry around is like an observer that listens for any changes in your behavior, and notifies them so they can take action.

In software development, the observer design pattern is used to notify one or more objects when a state or property changes in another object. For example, imagine you have a messaging application and you want to notify users when a new message arrives.

You can use the observer design pattern to create a messaging object that other objects can subscribe to. When a new message arrives, the messaging object notifies all the subscribers so they can update their user interface and show the new message.

So, the observer design pattern is like having a baby monitor or a listening device that notifies objects of any changes or updates.



### How Its Work?

Here's an example of implementing the Observer design pattern in JavaScript:

```javascript
// Define a Subject object that will notify its observers of any changes
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

// Define an Observer object that will be notified when the subject changes
class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`${this.name}: I have been notified by the subject.`);
  }
}

// Create a subject object
const subject = new Subject();

// Create some observers and add them to the subject's list of observers
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

// Notify all the observers that a change has occurred
subject.notifyObservers();

// Remove an observer from the list of observers
subject.removeObserver(observer2);

// Notify the remaining observers that another change has occurred
subject.notifyObservers();
```

In this example, we have a `Subject` object that maintains a list of its observers. We also have an `Observer` object that is notified when the subject changes, by calling its `update` method.

We create a `Subject` object and add some observers to its list of observers. We then notify all the observers that a change has occurred, by calling the `notifyObservers` method on the `Subject` object.

We then remove one of the observers from the list, and notify the remaining observers that another change has occurred.

When we run this code, we can see that each observer is notified when a change occurs. In this way, the observer design pattern allows objects to be notified when another object changes, without the need for tight coupling between the objects.




### Use Case
 
here's a pseudocode for a real-life example of the observer pattern in JavaScript:

```javascript
// Define a Subject class that tracks news headlines
class NewsPublisher {
  constructor() {
    this.headlines = [];
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  publishHeadline(headline) {
    this.headlines.push(headline);
    this.notifySubscribers();
  }

  notifySubscribers() {
    for (const subscriber of this.subscribers) {
      subscriber.notify(this.headlines);
    }
  }
}

// Define an Observer interface that defines the update() method
class NewsSubscriber {
  constructor(name) {
    this.name = name;
  }

  notify(headlines) {
    console.log(`${this.name}: New headlines - ${headlines}`);
  }
}

// Usage:
let newsPublisher = new NewsPublisher();

// Create some subscribers and subscribe them to the publisher
let subscriber1 = new NewsSubscriber("John");
let subscriber2 = new NewsSubscriber("Alice");
let subscriber3 = new NewsSubscriber("Joe");

newsPublisher.addSubscriber(subscriber1);
newsPublisher.addSubscriber(subscriber2);
newsPublisher.addSubscriber(subscriber3);

// Publish a new headline
newsPublisher.publishHeadline("Weather Alert: Tornado warning in effect.");

// Unsubscribe a subscriber
newsPublisher.removeSubscriber(subscriber2);

// Publish another headline
newsPublisher.publishHeadline("Sports Update: Team wins championship!");

// Output:
// John: New headlines - Weather Alert: Tornado warning in effect., Sports Update: Team wins championship!
// Alice: New headlines - Weather Alert: Tornado warning in effect.
// Joe: New headlines - Weather Alert: Tornado warning in effect., Sports Update: Team wins championship!
```

In this example, we have a `NewsPublisher` class that tracks news headlines and maintains a list of subscribers. We also have a `NewsSubscriber` class that is notified when a new headline is published, by calling its `notify` method.

We create a `NewsPublisher` object and add some subscribers to its list of subscribers. We then publish a new headline, which triggers a notification to all the subscribers. We next remove one of the subscribers from the list, and publish another headline.

When we run this code, we can see that each subscriber is notified when a new headline is published. In this way, the observer design pattern allows objects to be notified of changes to another object, without the need for tight coupling between the objects.

