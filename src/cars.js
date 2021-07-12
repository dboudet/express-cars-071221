const cars = [{
    make: "Audi",
    model: "A3",
    year: 2018
},{
    make: "Mazda",
    model: "CX-5",
    year: 2013
},{
    make: "Ford",
    model: "Mustang",
    year: 2001
},{
    make: "BMW",
    model: "Z3",
    year: 2020
}]

exports.getCars = (req,res) => res.send(cars)

exports.getSingleCar = (req,res) => {
    const { carId } = req.params
    res.send(cars[carId])
}