const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/Training`);
        console.log("MongoDB connected :: ", connectionInstance.connection.host)
    } catch (error) {
        console.log("Error in DB Connection :: ", error)
        process.exit(1);
    }
}

module.exports = connectDB