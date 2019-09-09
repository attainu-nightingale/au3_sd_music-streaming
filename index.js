var express=require("express");
var hbs = require('hbs');
var session = require("express-session");
var mongoClient = require("mongodb").MongoClient;
var db;

mongoClient.connect("mongodb://localhost:27017", function(err, client) {
    if (err) throw err;
    db = client.db("musify");
});


var app = express();
app.use(
    session({
        secret: "Express session secret"
    })
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));

// load router
var homeRouter = require('./routes/home');
//var playlistRouter=require('./routes/playlist');


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

//app.use("/playlist", playlistRouter)

app.get('/playlist', function (req, res) {
    res.render('playlist', {
        title: 'Playlist'
    });
});


 

app.get("/signup", function(req, res) {
    res.render("signup",  {
        title: "add Users",
        script: "/signup.js"
    });
});

app.post("/users/user", function(req, res) {
    db.collection("users").insertOne(req.body, function(err, result){
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
                        break;
                    }
                }
                if (flag) {
                    req.session.loggedIn = true;
                    res.redirect('/');
                } else {
                    res.redirect('/signup');
                }
            });
    });
    









    app.get("/login", function(req, res) {
        res.render("login",  {
            title: "login"
            
        });
    });

    app.get("/logout", function(req, res)  {
        req.session.destroy();
        res.redirect("/login")
         
    })
 
    
 

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.send('<h1>what??? page not found!</h1>', 404);

});

 
app.listen(3000,function(req,res){
    console.log("listening at 3000");
}
);

module.exports = app;