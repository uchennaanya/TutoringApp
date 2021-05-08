
const mongoose = require('mongoose')

require('dotenv').config()
const { MONGO_URI } = process.env

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log("MongoDB connected...")

    } catch (err) {
        console.error(err.message)

        process.exit(1)
    }
}

module.exports = connectDB