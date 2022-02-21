// const url = `api.openweathermap.org/data/2.5/weather?zip=${document.querySelector(<input type='submit'.val)},us&units=imperial&appid={df35e93312fb4ec3f7593d0a28cae1aa}`;

{/* document.querySelector('input').on('submit', performFetch(event)); */}

	fetch(https://api.openweathermap.org/data/2.5/weather?zip=94109&units=imperial&appid=df35e93312fb4ec3f7593d0a28cae1aa)
		.then(res)(() => {
			console.log('success!', res);
			return res.json;
		})
		.catch((err) => {
			console.log('something went wrong...', err);
		});
}
