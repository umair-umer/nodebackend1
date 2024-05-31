const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./persondata");
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Person.findOne({ username: username });
      if (!user) {

          return done(null, false, { message: "incorrect username" });
        }
        const ispasswordmatch = user.password === password ? true : false;
        if (!ispasswordmatch) {
          return done(null, user);
        } else {
          done(null, false, { message: "Incorrect password" });
        }


      
   
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "internal server erro" });
    }
  })
);

module.exports = passport;
