#[derive(Clone)]
struct Car {
    brand: String,
    model: String,
    color: String,
}

impl Car {
    fn new(brand: &str, model: &str, color: &str) -> Self {
        Car {
            brand: String::from(brand),
            model: String::from(model),
            color: String::from(color),
        }
    }

    fn print_info(&self) {
        println!("Brand: {}, Model: {}, Color: {}", self.brand, self.model, self.color);
    }
}

fn main() {
    let car_prototype = Car::new("Toyota", "Corolla", "Blue");
    let car1 = car_prototype.clone();
    let car2 = car_prototype.clone();

    car1.print_info();
    car2.print_info();
}