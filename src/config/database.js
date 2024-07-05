const mongoose = require('mongoose');

/**
 * Connects to the database using the provided URL.
 *
 * @return {Promise<void>} A promise that resolves when the connection is successful or rejects with an error if the connection fails.
 */

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Database connection successful')
    } catch (err) {
        console.log('Database connection failed')
    }
}

module.exports = connectDB;