const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const passport = require('passport');


const passportGoogle = require('./Passport/Strategies/GoogleStrategy');
const authRoute = require('./Passport/Routes/Auth');

const app = express();

async function App() {
    app.use(cookieSession(
        {
            name: "session",
            keys: ["test"],
            maxAge: 24 * 60 * 60 * 100,
        })
    );

    app.use(cookieParser("session"))

    app.use(express.json());
    app.use(express.urlencoded(
        {
            extended: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(
        cors({
            origin: "http://localhost:3000",
            methods: "GET,POST,PUT,DELETE",
            credentials: true,
        })
    );

    app.use('/auth', authRoute);

    app.post('/login', (req, res) => {
        console.log(req.body)
    });

    app.post('/register', (req, res) => {
        console.log(req.body)
    });

    app.get('/user', (req, res) => { });
}

async function Listen(port) {
    app.listen(port)
}

module.exports = {
    App,
    Listen
}