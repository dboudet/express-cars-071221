const { response } = require("express")
const express = require("express")  //import express library
const { getCars , getSingleCar } = require("./src/cars")
const app = express()   // create app that uses express

//  ***ALWAYS NEEDS TO START WITH A SLASH***
// app.get("/route", function (request, response) { define function }) 

app.get("/cars/:carId", getSingleCar)   //  ***NEED TO START WITH MOST SPECIFIC FIRST
app.get("/cars", getCars)
// or long-hand - app.get("/cars", (req,res) => getCars(req,res))

app.get("/hello", (req,res) => {  // ONLY allows access at localhost:3000/hello
    res.send("Hello Browser ")
})

// set app to listen on port 3000 - and console logging port for reference
app.listen(3000,() => {
    console.log("Listening on http://localhost:3000")
})

