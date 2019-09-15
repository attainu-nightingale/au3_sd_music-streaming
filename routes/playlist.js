var router = require('express').Router();
var mongoClient = require('mongodb').MongoClient;
var ObjectID = require("mongodb").ObjectID;
var db;

url = "mongodb+srv://roshan:9939105936@music-app-db-hexhh.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    db = client.db('musify');
    console.log("DB connected");
});



// Render Playlist with all songs
router.get("/", function (req, res) {
    if (req.session.loggedIn) {
        var id = req.session.user; // this should come from req.session when user logs in
        db.collection("users").findOne({ _id: ObjectID(id) }, function (err, result) {
            if (err) {
                return res.status(400).json({ error: 'An error occurred' });
            }
            res.render("playlist", {
                data: result.playlist,
                recent:result.recent,
                title: 'Playlist',
                style: 'index.css',
                script: "delete.js",
                user: req.session.user,
                username: req.session.username
            });
        });
    }
    else {
        res.redirect("/login");
    }

});



// Add song to playlist
router.post('/add', function (req, res) {
    var audioSrc = req.body.audioSrc;
    var songName = req.body.songName;
    var image = req.body.image;
    var _id = new ObjectID();

    var playlistObj = { _id, audioSrc, songName, image };

    var id = req.session.user; // this should be come from req.session when user login
    db.collection("users").updateOne({ _id: ObjectID(id) }, { $push: { playlist: playlistObj } }, function (err, result) {
        if (err) {
            return res.status(400).json({ error: "An error occurred" });
        }
        res.json({
            success: "Successfully added"
        });
    });
});

//Delete song from playlist
router.delete("/:songId", function (req, res) {
    var { songId } = req.params;
    var id = req.session.user; // this should be come from req.session when user login
    db.collection("users").updateOne({ _id: ObjectID(id) }, { $pull: { "playlist": { _id: ObjectID(songId) } } }, function (err, result) {
        //db.collection("users").deleteOne({_id:require("mongodb").ObjectID(req.params.id)},function(err,result){
        if (err) throw err;
        res.json({
            success: 'Successfully deleted'
        });
    });
});

// Add song to Recent played
router.post('/recent/add', function (req, res) {
    var audioSrc = req.body.audioSrc;
    var songName = req.body.songName;
    var image = req.body.image;
    var _id = new ObjectID();
    var recent = { _id, audioSrc, songName, image };
    var id = req.session.user; // this should be come from req.session when user login

    db.collection("users").updateOne({ _id: ObjectID(id) }, { $addToSet: { recent: recent} }, function (err, result) {
        if (err) {
            return res.status(400).json({ error: "An error occurred" });
        }
        res.json({
            success: "Successfully added"
        });
    });    
});

//Delete song from recent played
router.delete("/recent/:songId", function (req, res) {
    var { songId } = req.params;
    var id = req.session.user; // this should be come from req.session when user login
    db.collection("users").updateOne({ _id: ObjectID(id) }, { $pull: { "recent": { _id: ObjectID(songId) } } }, function (err, result) {
        //db.collection("users").deleteOne({_id:require("mongodb").ObjectID(req.params.id)},function(err,result){
        if (err) throw err;
        res.json({
         success: 'Successfully deleted'
             });
            });  
         });

         // Render Playlist with all songs
router.get("/next", function (req, res) {
    if (req.session.loggedIn) {
        var id = req.session.user; // this should come from req.session when user logs in
        db.collection("users").findOne({ _id: ObjectID(id) }, function (err, result) {
            if (err) {
                return res.status(400).json({ error: 'An error occurred' });
            }
            res.send(result.playlist);
        });
    }
    else {
        res.redirect("/login");
    }
});



module.exports = router;