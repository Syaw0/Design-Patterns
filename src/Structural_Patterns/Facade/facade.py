


class HotelBookingSystem:
    def check_availability(self, date):
        # Check availability of rooms on given date
        return True
    
    def book_room(self, date):
        # Book a room for the given date
        return "Room booked for {}".format(date)
    
class FlightBookingSystem:
    def check_availability(self, date):
        # Check availability of flights on given date
        return True
    
    def book_flight(self, date):
        # Book a flight for the given date
        return "Flight booked for {}".format(date)
    
class TravelFacade:
    def __init__(self):
        self.hotel_booking_system = HotelBookingSystem()
        self.flight_booking_system = FlightBookingSystem()
        
    def book_travel(self, date):
        is_room_available = self.hotel_booking_system.check_availability(date)
        is_flight_available = self.flight_booking_system.check_availability(date)
        
        if is_room_available and is_flight_available:
            self.hotel_booking_system.book_room(date)
            self.flight_booking_system.book_flight(date)
            return "Travel booked for {}".format(date)
        else:
            return "Travel not available for {}".format(date)


# In this example, we have two separate booking systems - one for hotels and one for flights. The `TravelFacade` class acts as a simplified interface to these systems, providing a single method `book_travel` that handles the booking of both a hotel room and a flight.

# When `book_travel` is called with a specific date, it first checks the availability of both a hotel room and a flight using the respective booking systems. If both are available, it then proceeds to book both the room and the flight and returns a success message. If either is unavailable, it returns a failure message.

# This implementation of the Facade design pattern allows for a simplified and streamlined interface to complex systems, making it easier for users to interact with them without having to worry about the underlying details.
