var express=require("express");
var hbs = require('hbs');

var app = express();

// load router
var homeRouter = require('./routes/home');

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



app.get('/library', function (req, res) {
    res.render('library', {
        title: 'Library'
    });
});



app.get('/library',function(req,res){
    res.send("this is library")
});

app.listen(3000,function(req,res){
    console.log("listening at 3000");
}
);

module.exports = app;