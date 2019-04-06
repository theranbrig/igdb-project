const express = require('express');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
const apicalypse = require('apicalypse').default;
const bodyParser = require('body-parser');
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/igdb', async (req, res) => {
	const requestOptions = {
		method: 'GET',
		baseURL: 'https://api-v3.igdb.com',
		headers: { Accept: 'application/json', 'user-key': `${process.env.USER_KEY}` },
		responseType: 'json'
	};

	try {
		const response = await apicalypse(requestOptions)
			.fields(
				'name,summary,franchise,platforms.name,platforms.platform_logo.image_id,genres.name,cover.image_id,release_dates.y,screenshots.image_id,rating'
			)
			.limit(40)
			.where(['rating > 70', 'platforms = (18)'])
			.request('/games');
		res.json(response.data);
	} catch (err) {
		console.error(err);
	}
	// gamecube-21 n64-4 snes-19 nes-18
});

app.get('/api/random', async (req, res) => {
	const platform = req.query.platform || 18;
	const randomRating = Math.floor(Math.random() * 100);
	console.log([platform, randomRating]);

	const requestOptions = {
		method: 'GET',
		baseURL: 'https://api-v3.igdb.com',
		headers: { Accept: 'application/json', 'user-key': `${process.env.USER_KEY}` },
		responseType: 'json'
	};

	try {
		const response = await apicalypse(requestOptions)
			.fields(
				'name,summary,franchise,platforms.name,platforms.platform_logo.image_id,genres.name,cover.image_id,release_dates.y,screenshots.image_id,rating'
			)
			.limit(150)
			.where([`rating > ${randomRating}`, `platforms = (${platform})`])
			.request('/games');
		const randomGameIndex = Math.floor(Math.random() * response.data.length);
		console.log(response.data[randomGameIndex]);
		res.json(response.data[randomGameIndex]);
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
