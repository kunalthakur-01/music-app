const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
// const { prototype } = require('spotify-web-api-node');

const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    // console.log(refreshToken);
    // console.log('hi');
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'd41d033c6bc44116be8f7a52be8cc081',
        clientSecret: '593323eccec0498e826cee9d29761820',
        refreshToken,
    });
    spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })
    })
    .catch(err => {
    //   console.log(err)
      res.sendStatus(400)
    })
});
  

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'd41d033c6bc44116be8f7a52be8cc081',
        clientSecret: '593323eccec0498e826cee9d29761820'
    });

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch((err) => {
        // console.log(err);
        res.sendStatus(400);
    });
});

app.listen(3001);

