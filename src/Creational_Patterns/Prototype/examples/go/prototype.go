package main

import "fmt"

type Car struct {
    Brand string
    Model string
    Color string
}

func (c *Car) Clone() *Car {
    return &Car{
        Brand: c.Brand,
        Model: c.Model,
        Color: c.Color,
    }
}

func main() {
    carPrototype := &Car{
        Brand: "Toyota",
        Model: "Corolla",
        Color: "Blue",
    }

    car1 := carPrototype.Clone()
    car2 := carPrototype.Clone()

    car1.Color = "Red"

    fmt.Println("Car 1:", car1.Brand, car1.Model, car1.Color)
    fmt.Println("Car 2:", car2.Brand, car2.Model, car2.Color)
}