# Facade Pattern

Imagine you have a big toy box with lots of different toys inside. Each toy has its own unique features and functions. But sometimes, it can be hard to remember how to play with each toy or which toy to use for a specific game.

That's where the Facade design pattern comes in! It's like having a toy box organizer that makes it easy for you to find and play with the toys you want. The organizer has a simple interface that lets you choose the toy you want to play with, and it takes care of all the complicated details behind the scenes.

For example, let's say you want to play a game of basketball. Instead of trying to remember how to set up the hoop, find the ball, and figure out the rules, you can use the basketball organizer. It has a big button that says "Play Basketball," and when you press it, it sets up the hoop, gives you the ball, and tells you the rules of the game.

In programming, the Facade design pattern is used to simplify complex systems by providing a simplified interface that hides all the details of how the system works. This makes it easier for developers to use the system and reduces the chances of errors or bugs.


### How Its Work



```javascript
// Define the LibraryFacade class
class LibraryFacade {
  private LibraryDatabase database;
  private LibraryCatalog catalog;
  private LibraryCheckout checkout;

  // Constructor sets up all necessary components
  public LibraryFacade() {
    this.database = new LibraryDatabase();
    this.catalog = new LibraryCatalog(database);
    this.checkout = new LibraryCheckout(database);
  }

  // Public methods provide a simplified interface for library operations
  public void search(String query) {
    catalog.search(query);
  }

  public void checkoutBook(String bookTitle, String borrowerName) {
    checkout.checkoutBook(bookTitle, borrowerName);
  }

  public void returnBook(String bookTitle) {
    checkout.returnBook(bookTitle);
  }
}

// Define the LibraryDatabase class (one of the components used by the facade)
class LibraryDatabase {
  // Implementation details...
}

// Define the LibraryCatalog class (another component used by the facade)
class LibraryCatalog {
  private LibraryDatabase database;

  // Constructor takes in a database object to use for queries
  public LibraryCatalog(LibraryDatabase database) {
    this.database = database;
  }

  // Implementation details...
}

// Define the LibraryCheckout class (another component used by the facade)
class LibraryCheckout {
  private LibraryDatabase database;

  // Constructor takes in a database object to use for queries
  public LibraryCheckout(LibraryDatabase database) {
    this.database = database;
  }

  // Implementation details...
}

```
In this example, the LibraryFacade class provides a simplified interface for library operations like searching for books and checking them out. The LibraryDatabase, LibraryCatalog, and LibraryCheckout classes are used internally by the facade to handle the complex details of managing the library's data and transactions. By using the facade, clients of the library system can interact with a simplified interface without needing to know about the underlying complexity.




### Use Case 

```javascript
// Define the FlightBookingFacade class
class FlightBookingFacade {
  private FlightSearch flightSearch;
  private SeatSelection seatSelection;
  private Payment payment;

  // Constructor sets up all necessary components
  public FlightBookingFacade() {
    this.flightSearch = new FlightSearch();
    this.seatSelection = new SeatSelection();
    this.payment = new Payment();
  }

  // Public methods provide a simplified interface for booking a flight
  public void bookFlight(String departureCity, String arrivalCity, String departureDate, String returnDate, int numOfPassengers) {
    // Search for available flights based on user input
    List<Flight> availableFlights = flightSearch.searchFlights(departureCity, arrivalCity, departureDate, returnDate, numOfPassengers);

    // Display available seat options and allow user to select seats
    List<Seat> selectedSeats = seatSelection.selectSeats(availableFlights, numOfPassengers);

    // Process payment for the selected seats
    payment.processPayment(selectedSeats);
  }
}

// Define the FlightSearch class (one of the components used by the facade)
class FlightSearch {
  // Implementation details...
}

// Define the SeatSelection class (another component used by the facade)
class SeatSelection {
  // Implementation details...
}

// Define the Payment class (another component used by the facade)
class Payment {
  // Implementation details...
}

```
In this example, the FlightBookingFacade class provides a simplified interface for booking a flight. The FlightSearch, SeatSelection, and Payment classes are used internally by the facade to handle the complex details of searching for available flights, selecting seats, and processing payment. By using the facade, users can interact with a simplified interface without needing to know about the underlying complexity of how their flight is being booked.







