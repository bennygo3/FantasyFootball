const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDatabase;

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost:27017',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }
// );

// const connection = mongoose.connection;

// connection.on('connected', () => {
//     console.log('Mongoose successfully connected to the database.');
// });

// connection.on('error', (err) => {
//     console.log('Mongoose connection error: ' + err);
// });

// connection.on('disconnected', () => {
//     console.log('Mongoose disconnected.');
// });

// module.exports = connection;

