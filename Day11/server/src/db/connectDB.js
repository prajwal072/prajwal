const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/DemoProject`)
        console.log("DB Connected :: ", connectionInstance.connection.host)
    } catch (error) {
        console.log("Error in connecting DB :: ", error)
        process.exit(1);
    }
}

module.exports = connectDB