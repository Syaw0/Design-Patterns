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




### Use Case


```javascript
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class BookList {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  *[Symbol.iterator]() {
    for (let book of this.books) {
      yield book;
    }
  }
}

const myBookList = new BookList();
myBookList.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925));
myBookList.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
myBookList.addBook(new Book("1984", "George Orwell", 1949));

for (let book of myBookList) {
  console.log(`${book.title} by ${book.author} (${book.year})`);
}

```
In this example, the BookList class represents a collection of books. We add books to the list using the addBook method.

The *[Symbol.iterator]() method is what makes BookList iterable. It uses a generator function to yield each book in the list.

We can then use a for...of loop to iterate over the books in the list and log their titles, authors, and years to the console.

This implementation of the Iterator pattern allows us to easily iterate over a collection of books without having to know how the BookList class is implemented internally. It also allows us to reuse the same iteration logic across different collections of objects.




























