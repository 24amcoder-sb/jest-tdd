const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } 
    catch (error) {
        console.error("Error connecting to MongoDb");
        console.error(error);
    }
};


mongoose.set('strictQuery', true);

module.exports = connectDb;