# Iterator



Imagine you have a big box of toys, but you can only play with one toy at a time. The iterator design pattern helps you go through each toy in the box one by one, so you can play with them all.

For example, let's say you have an array of numbers: [1, 2, 3, 4, 5]. With the iterator pattern, you can create an object that knows how to go through each number in the array one by one. 

Here's a sample code snippet:
```javascript

class NumberIterator {
  constructor(numbers) {
    this.numbers = numbers;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.numbers.length;
  }

  next() {
    return this.numbers[this.index++];
  }
}

const numbers = [1, 2, 3, 4, 5];
const iterator = new NumberIterator(numbers);

while (iterator.hasNext()) {
  console.log(iterator.next());
}

```
In this example, the NumberIterator class is the iterator that goes through each number in the array. The hasNext method checks if there are more numbers to iterate over, and the next method returns the next number in the array.

By using the Iterator pattern, we can easily go through each item in a collection without having to know the details of how the collection is structured. This makes our code more flexible and reusable.











