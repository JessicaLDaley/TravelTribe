let cityname = 'Hartford';
let statecode = 'CT';
let countrycode = 'US';
let APIkey = process.env.WEATHER_API_KEY || '80a1c1f27c7af3a0cc75daa8bf80c30d';
let limit = 5;

async function getCoordinates(){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${statecode},${countrycode}&limit=${limit}&appid=${APIkey}`);
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
    return [lat, lon];
}