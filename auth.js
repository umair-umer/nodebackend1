const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./persondata");

passport.use(new LocalStrategy(async (Username, password, done) => {
    try {
        const user = await Person.findOne({ username: Username });
        if (!user) {
            return done(null, false, { message: "Incorrect username" });
        }

        console.log(user.password, user.username, "umairr");
        const isPasswordMatch = user.password === password;

        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: "Incorrect password" });
        }

    } catch (err) {
        console.log(`Error during authentication: ${err}`);
        return done(err);
    }
}));

module.exports = passport;
