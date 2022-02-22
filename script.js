

// function myFunction() {
// 	var x = document.getElementById('myWeatherApp');
// 	if (x.style.display === 'none') {
// 		x.style.display = 'block';
// 	} else {
// 		x.style.display = 'none';
// 	}
// }

document.addEventListener('submit', () => {
const url =
	`https://api.openweathermap.org/data/2.5/weather?zip=${input#zipCode.val}&units=imperial&appid=df35e93312fb4ec3f7593d0a28cae1aa`;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		console.log('Success!');
		console.log(data);
		console.log(data.name);
		document.getElementById('city').innerText = data.name;
		document.getElementById('temp').innerText = `${Math.round(
			data.main.temp
		)}\u00B0`;
		document.getElementById('min-temp').innerText = data.main.temp_min;
		document.getElementById('max-temp').innerText = data.main.temp_max;
		console.log(data.weather[0]);
		document.getElementById(
			'forecast'
		).innerText = `The forecase is: ${data.weather[0].description}.`;
	})
	.catch((err) => {
		console.log('something went wrong...', err);
	});
