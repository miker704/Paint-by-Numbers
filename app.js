const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys.js').mongoURI;

//yet to be created fully 
const users = require('./routes/api/users.js');
const User = require('./models/User.js');
const bodyParser = require('body-parser');
const passport = require('passport');


app.use(passport.initialize());
require('./config/passport.js')(passport);

mongoose
    .connect(db,{useNewUrlParser:true})
    .then( () => console.log("Connected to MongoDB"))
    .catch( err=> console.log(err));


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());



//this is a test





app.use("/api/users", users);

//for users to creaate a puzzle of their own
//app.use("/api/puzzles",puzzles);

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`listening on port ${port}`);
} );

//at this point node.js is too dumb to know about any new changes so we use nodedemon to
// retransplie changes like webpack does or atleast tries to do .