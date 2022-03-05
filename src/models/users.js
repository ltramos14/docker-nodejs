const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    email: {
        type: String
    },
    username: { 
        type: String
    }
})

module.exports = model('User', UserSchema);