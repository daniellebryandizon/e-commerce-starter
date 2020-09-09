const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('MongoDB started'));
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;