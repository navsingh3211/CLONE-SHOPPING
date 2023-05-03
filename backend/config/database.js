const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI).then((data) => { 
        console.log(`MongoDb is connected with server ${data.connection.host}`);
    });
}

module.exports = connectDatabase;
