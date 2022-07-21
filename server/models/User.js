const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jorge:jorge@cluster1.zubu6.mongodb.net/?retryWrites=true&w=majority', {
    UseNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Connected at database!"));

var userSchema = mongoose.Schema({
    u_id: String,
    displayName: String,
    picture: String,
    locale: String,
    provider: String,
    username: String,
    email: String
});

const user = new mongoose.Schema({
    username: String,
    password: String,
});


module.exports = mongoose.model('User', userSchema) && mongoose.model('UserLocal', user);