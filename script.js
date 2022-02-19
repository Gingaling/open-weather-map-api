const url =
	'api.openweathermap.org/data/2.5/weather?zip={94109},us&units=imperial&appid={cdc1790221c7ab89f105c2e5dbba8722}';

fetch(url)
	.then(function (response) {
		return response.json;
	})
	.then(function (json) {
		let products = json;
		initialize(products);
	})
	.catch(function (err) {
		console.log('Fetch problem: ' + err.message);
	});
