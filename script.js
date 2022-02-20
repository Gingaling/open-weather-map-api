const url = `api.openweathermap.org/data/2.5/weather?zip={${input.val}},us&units=imperial&appid={df35e93312fb4ec3f7593d0a28cae1aa}`;

$(button.submit).on('click', () => {
	fetch(url)
	    .then(function (response) { 
			return response.json;
		})
		.then get (data.json){
			console.log(products = json);
			initialize(products);
		})
		.catch(function () +> {
			console.log('Fetch problem: ' + err.message);
		})
	};
}