const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// the server is actually hitting this API and the front side fetch will hit this server
router.get('/weather', (req, res) => {
    const apiUrl = 'https://api.darksky.net/forecast/e39f40352523e31c5afb85e34821dcc3/37.8267,-122.4233';

    fetch(apiUrl)
        .then(response => response.json())
        .then(json => res.send(json))
})

module.exports = router;
