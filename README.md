## You can see this API in action at https://peaceful-centaur-c7f6b1.netlify.app.

![ui](https://media.git.generalassemb.ly/user/6387/files/ac9a086c-9fd8-11e8-9e0d-52091e56436b)

# Build a Weather App

Here are working versions of the app:
- [Max](https://codepen.io/jkeohan/live/yjMKqE)
- [Aemero](https://codepen.io/jkeohan/live/ELWELM)

## Setting up

#### Make sure you follow all of these steps!

For this assignment you'll be using the Open Weather Data API. In order to use it, please follow these steps:

1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!
2. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!
3. Test the url in browswer to verify that your key works. 

```
api.openweathermap.org/data/2.5/weather?zip={ZIP CODE},us&units=imperial&appid={API KEY}
```

Once your key works, set up a static site in this repository with an HTML page, as well as files for CSS and JS. 

## Your page should have:
- An input field for a user to enter a zip code
- A submit button
- When the submit button is clicked:
    - A GET request should fetch the weather data from the API
    - The following data should be rendered on the page:
        - City name
        - Current temperature
        - Weather description
        - Min temp
        - Max temp
- Have the temperature turn blue if under 40, and red if above 90.

Here are some zip codes to test!
- 99501 (Anchorage)
- 99723 (Barrow, AK)
- 60605 (Chicago)
- 70124 (New Orleans)
- 77030 (Houston, TX)
- 00902 (San Juan, Puerto Rico)
- 46923 (Delphi, IN)
- 94123 (San Francisco, CA)

**Bonus**
- Make it pretty with some more CSS! 
- Add a five day forecast with their [5 day forecast endpoint](https://openweathermap.org/forecast5)
- Include the sunrise and sunset times (hint: maybe [Moment.js](https://momentjs.com/) will be helpful!) and some information about humidity, atmospheric pressure, etc.
- Use CSS Animation, images, etc. (think weather app)
- Leverage flexbox and use media queries to build a mobile version
