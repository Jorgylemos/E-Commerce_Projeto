const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('../../../models/User');

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: "/auth/google/callback"
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile.emails)
        process.nextTick(() => {
            User.findOne({ 'uid': profile.id }, (err, user) => {
                if (err) {
                    return done(err);
                }

                if (user) {
                    console.log("user found")
                    console.log(user)
                    return done(null, user);
                } else {
                    var newUser = new User();

                    newUser.u_id = profile.id;
                    newUser.displayName = profile.displayName;
                    newUser.picture = profile.photos[0].value;
                    newUser.provider = profile.provider;
                    newUser.username = profile.username;
                    newUser.email = profile.emails;

                    newUser.save((err) => {
                        if (err) {
                            throw err;
                        }
                        return done(null, newUser);
                    });
                };
            });
        });
        return done(null, profile);
    }));

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((id, done) => {
    return done(null, id);
});