// Import mongoose
const mongoose = require('mongoose');

// Create a schema for the User model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
