# Mediator (intermediary , controller)


Imagine you and your friend are playing with toys, but you both want to play with the same toy at the same time. You start to argue and neither of you are having any fun anymore. 

A mediator is like a teacher or parent who comes over and helps you both share the toy. They might say something like, "okay, you can play with the toy for 5 minutes, and then it's your friend's turn for 5 minutes." 

In software, the mediator design pattern works similarly. It helps different parts of a program communicate with each other without directly talking to each other. Instead, they all communicate through a mediator object.

For example, let's say you have a program where different parts need to know about changes that happen to a user's account. Instead of each part directly asking the user's account for updates, they all go through a mediator object that keeps track of changes and notifies the necessary parts when something happens. This way, each part doesn't need to worry about how the other parts work, they just need to communicate with the mediator.
