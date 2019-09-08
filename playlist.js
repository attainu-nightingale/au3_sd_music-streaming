var express = require('express');

var app = express();


var playlistRouter = require('./routes/playlist')



app.use(express.json());

app.set('view engine', 'hbs');


app.use("/playlist", playlistRouter)

app.listen(8000);

