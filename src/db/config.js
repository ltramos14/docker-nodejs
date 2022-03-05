const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        await mongoose.connect("mongodb://mongodb/mydatabase", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database online");
    } catch (error) {
        console.error(error);
    }
};

module.exports = { dbConection }

