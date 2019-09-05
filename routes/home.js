var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '63c9dd7d86144239971ceacbe077d1d8',
    clientSecret: '3235ae02a03b4078953dc337aef00983'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log('The access token expires in ' + data.body.access_token);
        console.log('The access token is ' + data.body.access_token);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body.access_token);
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

router.get('/', function (req, res) {
    spotifyApi.getAlbums(['2zkyMw73XzNXUQaXTb4cio', '4ceWEQarPyTyeb9TUeyLOG',
            '2B2gCeKprk9XdOo2w93gkr', '4neocSMt40stXKK2B8Sy2G',
            '6cunQQ7YZisYOoiFu2ywIq', '7LF4N7lvyDhrPBuCJ1rplJ',
            '0V4laGZGshNCpurfIdUhHv', '3RZxrS2dDZlbsYtMRM89v8', '61G7KL6rpj167r6H4CzS8C'
        ],
        function (err, data) {
            if (err) throw err;
            var firstAlbumImage = data.body.albums[0].images[0].url;
            var secondAlbumImage = data.body.albums[1].images[0].url;
            var thirdAlbumImage = data.body.albums[2].images[0].url;
            var fourthAlbumImage = data.body.albums[3].images[0].url;
            var fifthAlbumImage = data.body.albums[4].images[0].url;
            var sixthAlbumImage = data.body.albums[5].images[0].url;
            var seventhAlbumImage = data.body.albums[6].images[0].url;
            var eigthAlbumImage = data.body.albums[7].images[0].url;
            var ninthAlbumImage = data.body.albums[8].images[0].url;
            var firstAlbumName = data.body.albums[0].name;
            var secondAlbumName = data.body.albums[1].name;
            var thirdAlbumName = data.body.albums[2].name;
            var fourthAlbumName = data.body.albums[3].name;
            var fifthAlbumName = data.body.albums[4].name;
            var sixthAlbumName = data.body.albums[5].name;
            var seventhAlbumName = data.body.albums[6].name;
            var eigthAlbumName = data.body.albums[7].name;
            var ninthAlbumName = data.body.albums[8].name;
            spotifyApi.getAlbumTracks('2zkyMw73XzNXUQaXTb4cio', {
                limit: 1,
                offset: 1
            }, function (err, data) {
                if (err) throw err;
                var result = data.body.items[0];
                // Get tracks in an second album
                spotifyApi.getAlbumTracks('4ceWEQarPyTyeb9TUeyLOG', {
                        limit: 1,
                        offset: 1
                    }, function (err, data) {
                    if (err) throw err;
                    var resultTwo = data.body.items[0];
                    spotifyApi.getAlbumTracks('7LF4N7lvyDhrPBuCJ1rplJ', {
                            limit: 5,
                            offset: 1
                        }, function (err, data) {
                            if (err) throw err;
                            var resultThree = data.body.items[1];
                            var resultFour = data.body.items[2];
                            spotifyApi.getAlbumTracks('3RZxrS2dDZlbsYtMRM89v8', {
                                limit: 5,
                                offset: 1
                                }, function (err, data) {
                                    if (err) throw err;
                                    console.log(data.body);
                                    var resultFive = data.body.items[0];
                                    res.render('index', {
                                        title: 'Musify',
                                        style: 'index.css',
                                        firstAlbumImage: firstAlbumImage,
                                        secondAlbumImage: secondAlbumImage,
                                        thirdAlbumImage: thirdAlbumImage,
                                        fourthAlbumImage: fourthAlbumImage,
                                        fifthAlbumImage: fifthAlbumImage,
                                        sixthAlbumImage: sixthAlbumImage,
                                        seventhAlbumImage: seventhAlbumImage,
                                        eigthAlbumImage: eigthAlbumImage,
                                        ninthAlbumImage: ninthAlbumImage,
                                        firstAlbumName: firstAlbumName,
                                        secondAlbumName: secondAlbumName,
                                        thirdAlbumName: thirdAlbumName,
                                        fourthAlbumName: fourthAlbumName,
                                        fifthAlbumName: fifthAlbumName,
                                        sixthAlbumName: sixthAlbumName,
                                        seventhAlbumName: seventhAlbumName,
                                        eigthAlbumName: eigthAlbumName,
                                        ninthAlbumName: ninthAlbumName,
                                        audioOne: result,
                                        audioTwo: resultTwo,
                                        audioThree: resultThree,
                                        audioFour: resultFour,
                                        audioFive: resultFive
                                    });
                            });
                        });
                    });
            });
    });
});


module.exports = router;