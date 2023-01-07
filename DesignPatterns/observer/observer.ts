// * OBSERVER or EVENT-SUBSCRIBER or LISTENER
// this pattern simply implement the system that some objects
// listen on some special events!! and when that event happen
// publisher run some business login on subscriber

// assume this example:
// we have an blog application that user can write read and edit posts...
// there is another feature , users can subscribe another users
// we need to implement the system that when user publish post other
// subscriber receive a notification

// let build that

// first we need a publisher with some fields
// commonly some of fields are repeated in another publisher classes so
// lets write our interface

interface Publisher {
  subscribers: Subscriber[] | [];
  subscribe(s: Subscriber[]): void;
  unSubscribe(s: Subscriber): void;
  triggerAction(data: any): void;
}

// here write our subscriber interface that is same in all subscribers
// also with your application need this can have another fields ...

interface Subscriber {
  action(data: any): void;
}

// * LETS WRITE CONCRETE CLASSES :D

class UserPublisher implements Publisher {
  subscribers: Subscriber[] = [];

  constructor(public publisherName: string) {}

  subscribe(s: Subscriber[]): void {
    this.subscribers.push(...s);
    console.log(
      `successfully subscribe ${this.publisherName} by ${s.map(
        (su: any) => su.name
      )} `
    );
  }
  unSubscribe(s: Subscriber): void {
    this.subscribers.filter((sub) => sub !== s);
    console.log(`successfully unsubscribe ${this.publisherName}  by ${s}`);
  }
  triggerAction(data: any): void {
    this.subscribers.forEach((s) => s.action(data));
  }
}

class UserSubscriber implements Subscriber {
  constructor(
    public name: string,
    private id: number,
    private tel: number,
    private email: string
  ) {}
  action(data: any): void {
    console.log(
      `send data:\nto:${this.name}\n${data}\nto this tel number:${this.tel} \nto this email:${this.email}\n\n `
    );
  }
}

//* WOOHOO LETS TEST IT =)

const siaPublisher = new UserPublisher("siavash");
const johnSubscriber = new UserSubscriber(
  "john",
  55132,
  15124323,
  "johnmakintash@gmail.com"
);

const ericSubscriber = new UserSubscriber(
  "eric",
  5244,
  19853322,
  "Er1c@gmail.com"
);

const SaeedSubscriber = new UserSubscriber(
  "Saeed",
  6543,
  989101342332,
  "SaeedKiller@gmail.com"
);

// here subscribers subscribe the publisher event!
siaPublisher.subscribe([ericSubscriber, SaeedSubscriber, johnSubscriber]);

// when sia decide to share some information these subscriber receive notification
siaPublisher.triggerAction("hello my dear friends");

// ** IT WORKED WELL AND SEXY *-*
