import copy

# The prototype class
class Prototype:
    def clone(self):
        pass

# Concrete prototype class
class Car(Prototype):
    def __init__(self, brand, model, color):
        self.brand = brand
        self.model = model
        self.color = color

    def clone(self):
        return copy.deepcopy(self)

    def __str__(self):
        return f"Car: {self.brand} {self.model}, Color: {self.color}"

# Client code
original_car = Car("Toyota", "Camry", "Blue")
print(original_car)

cloned_car = original_car.clone()
cloned_car.color = "Red"
print(cloned_car)
