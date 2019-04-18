const express = require('express');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
const apicalypse = require('apicalypse').default;
const bodyParser = require('body-parser');
var cors = require('cors');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const requestOptions = {
	method: 'GET',
	baseURL: 'https://api-v3.igdb.com',
	headers: { Accept: 'application/json', 'user-key': `${process.env.USER_KEY}` },
	responseType: 'json'
};

const gameRequest =
	'name,summary,platforms.name,genres.name,involved_companies.company.name,cover.image_id,release_dates.y,screenshots.image_id,rating';

// Random Game Route
app.get('/api/random', cors(), async (req, res) => {
	const platform = req.query.platform || 18;
	const randomRating = Math.floor(Math.random() * 100);
	try {
		const response = await apicalypse(requestOptions)
			.fields(gameRequest)
			.limit(150)
			.where([`rating > ${randomRating}`, `platforms = (${platform})`])
			.request('/games');
		const randomGameIndex = Math.floor(Math.random() * response.data.length);
		if (!response.data) {
			res.send('Oops! No Game Found.  Please Go Back');
		}
		res.json(response.data[randomGameIndex]);
	} catch (err) {
		res.send('Oops! Something went wrong.');
	}
});

// Route with Game ID
app.get('/api/game/:gameId/:platform', cors(), async (req, res) => {
	const gameId = req.params.gameId;
	try {
		const response = await apicalypse(requestOptions)
			.fields(gameRequest)
			.limit(10)
			.where([`id = ${gameId}`])
			.request('/games');
		res.json(response.data[0]);
	} catch (err) {
		res.send('Oops! Something went wrong.');
	}
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
