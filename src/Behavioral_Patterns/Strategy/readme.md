# Strategy


Imagine you have a toy box with different kinds of toys - some are cars, some are dolls, some are blocks. Each toy is different and has its own unique features. 

Now, let's say you want to play a game with these toys where you need to organize them based on their type. You can use the strategy design pattern to do this. 

The strategy design pattern is like having a helper who knows how to sort things. This helper can look at each toy and figure out what type it is - a car, a doll, or a block - and then put it in the right pile. 

So, you can tell your helper to sort all the cars in one pile, all the dolls in another pile, and all the blocks in a third pile. The helper knows what to do because you gave it instructions on how to sort the toys. 

In programming, we use the strategy design pattern to organize different parts of our code based on their functionality. For example, we might have different sorting algorithms that we want to use depending on the situation. We can use the strategy design pattern to select the right algorithm based on the input we're given.



### How Its Work

```javascript
// Define the toy interface
interface Toy {
  function play(): void;
}

// Define different types of toys
class Car implements Toy {
  function play() {
    // Play with the car
  }
}

class Doll implements Toy {
  function play() {
    // Play with the doll
  }
}

class Block implements Toy {
  function play() {
    // Play with the block
  }
}

// Define the sorting strategy interface
interface SortStrategy {
  function sort(toys: Array<Toy>): Array<Toy>;
}

// Define different sorting strategies
class ByTypeSortStrategy implements SortStrategy {
  function sort(toys: Array<Toy>): Array<Toy> {
    // Sort toys by type
    // Put cars in one pile, dolls in another, and blocks in a third
    return sortedToys;
  }
}

class ByColorSortStrategy implements SortStrategy {
  function sort(toys: Array<Toy>): Array<Toy> {
    // Sort toys by color
    // Put all red toys in one pile, blue toys in another, and so on
    return sortedToys;
  }
}

// Use the strategy to sort the toys
function organizeToys(toys: Array<Toy>, strategy: SortStrategy): Array<Toy> {
  return strategy.sort(toys);
}

// Example usage
toys = [new Car(), new Doll(), new Block(), ...];
strategy = new ByTypeSortStrategy();
organizedToys = organizeToys(toys, strategy);
// organizedToys now contains the toys sorted by type
```

