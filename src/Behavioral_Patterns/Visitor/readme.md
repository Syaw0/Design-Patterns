# Visitor

Imagine you have a bunch of toys in your room, and you want to know what they are made of. You could go to each toy and try to figure it out, but that would take a lot of time and effort. Instead, you could ask a grown-up to help you. This grown-up is like the Visitor in the Visitor design pattern.

In software development, the Visitor design pattern is used when you have a bunch of different types of objects, and you want to perform some action on all of them. Instead of writing code to handle each object type separately, you create a Visitor object that knows how to handle all the different types of objects.

For example, let's say you have a game with different types of enemies, such as goblins, dragons, and trolls. Each enemy has different properties and behaviors. You want to implement a feature where the player can attack each enemy and deal damage. Instead of writing code to handle each enemy type separately, you can create a Visitor object called "Attacker" that knows how to attack each type of enemy. When the player attacks an enemy, you pass the Attacker object to the enemy, and it knows how to handle the attack based on its type.


### How Its Work


```javascript
// Define the Visitor interface
interface Visitor {
    visit(element: Element)
}

// Define the Concrete Visitor implementations
class ConcreteVisitor1 implements Visitor {
    visit(element: Element) {
        // Implement the logic for visiting Element with ConcreteVisitor1
    }
}

class ConcreteVisitor2 implements Visitor {
    visit(element: Element) {
        // Implement the logic for visiting Element with ConcreteVisitor2
    }
}

// Define the Element interface
interface Element {
    accept(visitor: Visitor)
}

// Define the Concrete Element implementations
class ConcreteElement1 implements Element {
    accept(visitor: Visitor) {
        visitor.visit(this)
    }
}

class ConcreteElement2 implements Element {
    accept(visitor: Visitor) {
        visitor.visit(this)
    }
}

// Define the Object Structure
class ObjectStructure {
    private elements: Element[]

    addElement(element: Element) {
        elements.push(element)
    }

    removeElement(element: Element) {
        // Remove the element from the elements array
    }

    accept(visitor: Visitor) {
        for (element in elements) {
            element.accept(visitor)
        }
    }
}

// Usage example
objectStructure = new ObjectStructure()
objectStructure.addElement(new ConcreteElement1())
objectStructure.addElement(new ConcreteElement2())

visitor1 = new ConcreteVisitor1()
visitor2 = new ConcreteVisitor2()

objectStructure.accept(visitor1)
objectStructure.accept(visitor2)
```

In this example, we have defined the Visitor interface and two ConcreteVisitor implementations that define the logic for visiting elements. We have also defined the Element interface and two ConcreteElement implementations that define the accept() method to accept a visitor. 

We have then defined an ObjectStructure class that contains an array of elements and implements an accept() method that calls the accept() method of each element in the array with the given visitor.

Finally, we have created an instance of the ObjectStructure class and added two elements to it, then created two visitors and called the accept() method of the object structure with each visitor. This will cause each element in the object structure to accept each visitor in turn, and the appropriate visit() method will be called for each element-visitor pair.






### Use Case



here is a real-world example of how the Visitor Design Pattern could be implemented in pseudocode:

```javascript
// Define the Visitor interface
interface Visitor {
    visit(book: Book)
    visit(dvd: DVD)
}

// Define the Concrete Visitor implementations
class ShippingVisitor implements Visitor {
    visit(book: Book) {
        // Calculate shipping cost for a book
    }

    visit(dvd: DVD) {
        // Calculate shipping cost for a DVD
    }
}

class TaxVisitor implements Visitor {
    visit(book: Book) {
        // Calculate tax for a book
    }

    visit(dvd: DVD) {
        // Calculate tax for a DVD
    }
}

// Define the Element interface
interface Element {
    accept(visitor: Visitor)
}

// Define the Concrete Element implementations
class Book implements Element {
    accept(visitor: Visitor) {
        visitor.visit(this)
    }
}

class DVD implements Element {
    accept(visitor: Visitor) {
        visitor.visit(this)
    }
}

// Define the Object Structure
class ShoppingCart {
    private items: Element[]

    addItem(item: Element) {
        items.push(item)
    }

    removeItem(item: Element) {
        // Remove the item from the items array
    }

    calculateShippingCost(shippingVisitor: Visitor) {
        var totalCost = 0
        for (item in items) {
            item.accept(shippingVisitor)
            totalCost += shippingVisitor.getShippingCost()
        }
        return totalCost
    }

    calculateTax(taxVisitor: Visitor) {
        var totalTax = 0
        for (item in items) {
            item.accept(taxVisitor)
            totalTax += taxVisitor.getTax()
        }
        return totalTax
    }
}

// Usage example
shoppingCart = new ShoppingCart()
shoppingCart.addItem(new Book())
shoppingCart.addItem(new DVD())

shippingVisitor = new ShippingVisitor()
taxVisitor = new TaxVisitor()

shippingCost = shoppingCart.calculateShippingCost(shippingVisitor)
tax = shoppingCart.calculateTax(taxVisitor)
```

In this example, we have defined the Visitor interface and two ConcreteVisitor implementations that define the logic for calculating shipping costs and taxes for books and DVDs. We have also defined the Element interface and two ConcreteElement implementations that define the accept() method to accept a visitor.


We have then defined a ShoppingCart class that contains an array of items and implements methods to calculate the shipping cost and tax for all items in the cart. These methods loop over the items in the cart and call the accept() method of each item with the given visitor, which will call the appropriate visit() method for each item-visitor pair.

Finally, we have created an instance of the ShoppingCart class, added a book and a DVD to it, created a ShippingVisitor and a TaxVisitor, and called the calculateShippingCost() and calculateTax() methods of the shopping cart with each visitor. This will cause each item in the shopping cart to accept each visitor in turn, and the appropriate visit() method will be called for each item-visitor pair to calculate the shipping cost and tax for each item.








