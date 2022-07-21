const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const session = require('express-session');


const passportGoogle = require('./Passport/Strategies/GoogleStrategy');
const authRoute = require('./Passport/Routes/Auth');
const UserLocal = require('./../models/User')

const app = express();

async function App() {
    /**
    app.use(cookieSession(
        {
            name: "session",
            keys: ["test"],
            maxAge: 24 * 60 * 60 * 100,
        })
    );
     */

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
        cors({
            origin: "http://localhost:3000",
            methods: "GET,POST,PUT,DELETE",
            credentials: true,
        })
    );

    app.use(
        session({
            secret: "secretcode",
            resave: true,
            saveUninitialized: true
        })
    );

    app.use(cookieParser("secretcode"));
    app.use(passport.initialize());
    app.use(passport.session());
    require("./Passport/Strategies/LocalStrategy")(passport);




    app.use('/auth', authRoute);

    app.post("/login", (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err;
            if (!user) res.send("No User Exists");
            else {
                req.logIn(user, (err) => {
                    if (err) throw err;
                    res.send("Successfully Authenticated");
                    console.log(req.user);
                });
            }
        })(req, res, next);
    });

    app.post("/register", (req, res) => {
        UserLocal.findOne({ username: req.body.username }, async (err, doc) => {
            if (err) throw err;
            if (doc) res.send("User Already Exists");
            if (!doc) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);

                const newUser = new UserLocal({
                    username: req.body.username,
                    password: hashedPassword,
                });
                await newUser.save();
                res.send("User Created");
            }
        });
    });

    app.get("/user", (req, res) => {
        res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    });
}

async function Listen(port) {
    app.listen(port)
}

module.exports = {
    App,
    Listen
}