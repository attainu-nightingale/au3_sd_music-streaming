var router = require('express').Router()
var mongoClient = require('mongodb').MongoClient;
var ObjectID = require("mongodb").ObjectID
var db;

mongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    db = client.db('project');
    console.log("DB connected")
});



// Render Playlist with all songs
router.get("/", function (req, res) {
    db.collection("playlists").find().toArray(function (err, result) {
        if (err) throw err
        console.log(result)
        res.render("playlist", {
            data: result,
            title: 'Playlist',
            style: 'index.css',
        })
    })
})


// Add song to playlist
router.post('/add', function (req, res) {
    var audioSrc = req.body.audioSrc
    var songName = req.body.songName
    var image = req.body.img


    db.collection("playlists").insertOne({ audioSrc, songName, image }, function (err, result) {
        if (err) throw err
        res.json({
            success: "Added successfully"
        })
    })
})

//Delete song from playlist
router.delete("/:id", function (req, res) {
    var { id } = req.params;
    db.collection("playlists").deleteOne({ _id: ObjectID(id) }, function (err, result) {
        if (err) throw err
        res.json({
            success: 'Successfully deleted'
        })
    })
})



module.exports = router;