var router = require('express').Router()
var mongoClient = require('mongodb').MongoClient;
var ObjectID = require("mongodb").ObjectID
var SpotifyWebApi = require('spotify-web-api-node');
var db;

mongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    db = client.db('project');
    console.log("DB connected")
});

var spotifyApi = new SpotifyWebApi({
    clientId: '1a76de2605a741a681641bac868187f4',
    clientSecret: 'c3a9602286404f6aaa20c9b2ee9bc46d',
});


// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token', err.message);
    }
).then(function (data) {
    var artist_id = '43ZHCT0cAZBISjO8DG9PnE'
    var track_id = '4iV5W9uYEdYUVa79Axb7Rh'
})


//get all info for particular user
router.get("/", function (req, res) {
    db.collection('playlists').findOne({ _id: ObjectID("5d7320f2807f48022853ca5d") }, function (err, result) {
        if (err) throw err
        res.render("playlist", {
            data: result.playlists
        })
    })
})


//route for adding song to a playlist
router.post('/add', function (req, res) {
    var audioSrc = req.body.audioSrc
    var songName = req.body.songName

    db.collection("playlists").insertOne({ audioSrc, songName }, function (err, result) {
        if (err) throw err
        res.json({
            success: "Added successfully"
        })
    })
})

//route for delete 
router.delete("/:userID/:playID", function (req, res) {
    var { userID, playID } = req.params;
    db.collection("playlists").findOne({ _id: ObjectID(userID) }, function (err, result) {
        if (err) throw err
        var { playlists } = result

        for (var i = 0; i < playlists.length; i++) {
            if (playID == playlists[i]._id) {
                playlists.splice(i, 1)
            }
        }
        db.collection("playlists").updateOne({ _id: ObjectID(userID) }, { $set: { playlists: playlists } }, function (err, result) {
            if (err) throw err
            res.json(result)
        })

    })
})



module.exports = router;