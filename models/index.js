const mongoose = require("mongoose");
const User = require("./user.model");

const db = {}

// Define schema
db.User = User


// Connect to database
db.connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("MongoDB connected successfully"))
    } catch (err) {
        next(err);
        process.exit();
    }
}

module.exports = db;