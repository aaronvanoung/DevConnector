//bringing in mongoose
const mongoose = require('mongoose');
//bring in config package
const config = require('config');
//db gets the mongoURI string
const db = config.get('mongoURI');
//use async away to connect to db 
//create an arrow function
const connectDB = async () => {
    try {
        //returns a promise
       await mongoose.connect(db, {
           useNewUrlParser: true,
           useCreateIndex: true,
           useFindAndModify: false,
           useUnifiedTopology: true
       });
        //console log 
       console.log('MongoDB Connected...')
    } catch(err) {
        //if something goes wrong
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}
//export this
module.exports = connectDB;