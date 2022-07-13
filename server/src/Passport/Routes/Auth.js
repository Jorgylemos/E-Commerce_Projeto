const router = require('express').Router();
const passport = require('passport');
const config = require('../../Services/Data/config.json');

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            //cookies: req.cookies
        });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(config[0].CLIENT_URL);
});

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure"
    });
});

router.get("/google", passport.authenticate("google", { scope: ['profile', 'email', 'https://www.googleapis.com/auth/user.birthday.read'] }));

router.get(
    "/google/callback",
    passport.authenticate('google', {
        successRedirect: config[0].CLIENT_URL,
        failureRedirect: '/login/failed',
    })
);

module.exports = router;