//  VARIABLES
const form = document.getElementById('get-zip');
const zipInput = document.getElementById('zipCode');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const forecast = document.getElementById('forecast');
const minTemp = document.getElementById('min-temp');
const maxTemp = document.getElementById('max-temp');
const toggle = document.getElementById('hidden-content');
const topArea = document.querySelector('.top-area');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

function convertTime(x) {
	let unix = x;
	let date = new Date(unix * 1000);
	return date;
}

form.addEventListener('submit', event => {
	event.preventDefault();
	topArea.style.transform = 'translateY(-40%)';
	const userInput = zipInput.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?zip=${userInput},us&units=imperial&appid=df35e93312fb4ec3f7593d0a28cae1aa`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			city.textContent = data.name;
			temp.textContent = Math.floor(data.main.temp) + '°';
			forecast.textContent = data.weather[0].description;
			minTemp.textContent = Math.floor(data.main.temp_min) + '°';
			maxTemp.textContent = Math.floor(data.main.temp_max) + '°';
			sunrise.textContent = convertTime(data.sys.sunrise);
			sunset.textContent = convertTime(data.sys.sunset);

			if ((toggle.classList = 'hidden')) {
				toggle.classList.toggle('hidden');
			}
		})
		.catch(err => console.log(err));
});
