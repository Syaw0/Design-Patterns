# Visitor

Imagine you have a bunch of toys in your room, and you want to know what they are made of. You could go to each toy and try to figure it out, but that would take a lot of time and effort. Instead, you could ask a grown-up to help you. This grown-up is like the Visitor in the Visitor design pattern.

In software development, the Visitor design pattern is used when you have a bunch of different types of objects, and you want to perform some action on all of them. Instead of writing code to handle each object type separately, you create a Visitor object that knows how to handle all the different types of objects.

For example, let's say you have a game with different types of enemies, such as goblins, dragons, and trolls. Each enemy has different properties and behaviors. You want to implement a feature where the player can attack each enemy and deal damage. Instead of writing code to handle each enemy type separately, you can create a Visitor object called "Attacker" that knows how to attack each type of enemy. When the player attacks an enemy, you pass the Attacker object to the enemy, and it knows how to handle the attack based on its type.


### How Its Work
