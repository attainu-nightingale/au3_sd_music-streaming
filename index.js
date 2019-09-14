var express = require("express");
var hbs = require('hbs');
var session = require("express-session");
var mongoClient = require("mongodb").MongoClient;
var db;
url = process.env.MONGO_URL ||"mongodb+srv://roshan:9939105936@music-app-db-hexhh.mongodb.net/?retryWrites=true&w=majority";
mongoClient.connect(url, function (err, client) {
    if (err) throw err;
    db = client.db("musify");
});

var port = process.env.PORT || 3000;


var app = express();
app.use(
    session({
        secret: "Express session secret"
    })
);

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false
}));

// load router
var homeRouter = require('./routes/home');
//var playlistRouter=require('./routes/playlist');

var playlistRouter = require('./routes/playlist');

// hbs middleware
app.set('view engine', 'hbs');

// express body-parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// static folder middleware
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials/');


hbs.registerHelper('is', function (parameter, string, options) {
    if (parameter == string) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

// use router
app.use('/', homeRouter);

// playlist router
app.use("/playlist", playlistRouter)





app.get("/signup", function (req, res) {
    res.render("signup", {
        title: "add Users",
        script: "/signup.js",
        user: req.session.user
    });
});

app.post("/users/user", function (req, res) {
    db.collection("users").insertOne(req.body, function (err, result) {
        if (err) throw err;
        console.log(req.body)
        res.redirect("/login")
    })
});


app.post('/login', function (req, res) {
    var flag = false;
    db.collection('users')
        .find()
        .toArray(function (error, result) {
            if (error) {
                throw error;
            }
            for (var i = 0; i < result.length; i++) {
                if (req.body.username == result[i].username && req.body.password == result[i].password) {
                    flag = true;
                    req.user = result[i]._id;
                    req.username = req.body.username;
                    console.log(req.user);
                    break;
                }
            }
            if (flag) {
                req.session.loggedIn = true;
                req.session.user = req.user;
                req.session.username = req.username;
                console.log(req.user);
                res.redirect('/');
            } else {
                res.redirect('/signup');
            }
        });
});



app.get("/login", function (req, res) {
    res.render("login", {
        title: "login",
        style: "login.css",
        user: req.session.user

    });
});

app.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/login")

})




//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.status(404).send('<h1>what??? page not found! 404</h1>');

});


app.listen(port, function (req, res) {
    console.log("listening at 3000");
});

module.exports = app;