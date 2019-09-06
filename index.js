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



app.get('/playlist', function (req, res) {
    res.render('playlist', {
        title: 'Playlist'
    });
});


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.send('<h1>what??? page not found!</h1>', 404);

});
app.listen(3000,function(req,res){
    console.log("listening at 3000");
}
);

module.exports = app;