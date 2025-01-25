const express = require('express')
require("dotenv").config()
const cors = require("cors")
const connectDB = require('./db/connectDB.js')
const Movie = require("./models/movieModel.js")

const PORT = process.env.PORT || 5002

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({"message": "Hello world", "success": true})
})

app.get('/login', (req, res) => {
    res.status(200).json({"message": "user logged in successfully", "success": true})
})

app.get('/register', (req, res) => {
    res.status(200).json({"message": "account created successfully", "success": true})
})

app.get('/product', (req, res) => {
    res.status(200).json({"message": "product fetched", "success": true})
})

app.get('/about', (req, res) => {
    res.status(200).json({"message": "about us page"})
})


app.post('/getdata', (req, res) => {
    const {name, email, password} = req.body;

    res.status(200).json({"username": name, "email": email, "password": password})
})

app.post('/movie', async (req, res) => {
    const {name, actor, actress, year, genre} = req.body;

    const movieData = {
        name,
        actor,
        actress,
        year,
        genre
    }

    const data = await Movie.create(movieData)

    res.status(200).json({"message": "movie data collected successfully", "success": true, data})
})

app.get('/get-movie', async (req, res) => {
    try {
        const {name, year} = req.body;
        const data = await Movie.findOne({name, year})
        res.status(200).json({"message": "data fetched successfully", "success": true, data})
    } catch (error) {
        console.log("Error in get data :: ", error)
    }
})

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error) => {
    console.log("Mongodb Connection failed !")
})
