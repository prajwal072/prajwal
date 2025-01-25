const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./db/connectDB.js')
const User = require('./model/userModel.js')

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}))

app.post('/user-data',  async (req, res) => {
    try {
        const {name, email, age, phone, address} = req.body;

        if(!name || !email || !age || !phone || !address) {
            console.log('All fields are required')
        }

        const data = {
            name,
            email,
            age,
            phone,
            address
        }

        const user = await User.create(data)

        if(!user) {
            console.log("error in creating user :: ", user)
        }

        res.status(201).json({"success": true, "message": "user created successfully", user: user})
    } catch (error) {
        console.log("Error in getting user data in backend :: ", error)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find()

        if(!users) {
            console.log("Error in getting users from DB")
        }

        res.status(200).json({"message": "users fetched successfully", "success": true, users: users})
    } catch (error) {
        console.log("Error in fetching all users data :: ", error)
    }
})


app.get('/user-data/:name', async (req, res) => {
    try {
        const {name} = req.params;
        if(!name) {
            console.log("Name needed to provide in params")
        }

        const user = await User.findOne({name})

        if(!user) {
            console.log("Unable to fetched user from DB")
        }

        res.status(200).json({"message": "data fetch successfully", "success": true, user: user})
    } catch (error) {
        console.log("Error in getting data in backend :: ", error)
    }
})

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed ! ::", error)
})