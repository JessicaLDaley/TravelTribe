const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJsdXdwYnZpZnRqb3lya2Z4cGFAa3ZocnMuY29tIiwiYXBpX3Rva2VuIjoiQVk0eDJ0WmdmdXdqSnd4MjJ1V1VoUVpNVFh6SWhqWWFSanFCZUJMVGY1WXR2M2VNcHJLd0F2R1ZZR0Vpak5jU3hyUSJ9LCJleHAiOjE2NDE5MjE1MjJ9.Ckg9-myqB3ATjom8khtiVIbgqiLR89szGM1wa0TznX8";

export async function getCountries(){
    let url = "https://www.universal-tutorial.com/api/countries/";
    let data = await query(url);
    let countries = data.map(d => d.country_name);
    return countries;
}

export async function getStates(country){
    let url = `https://www.universal-tutorial.com/api/states/${country}`;
    let data = await query(url);
    let states = data.map(d => d.state_name);
    return states;
}

export async function getCities(state){
    let url = `https://www.universal-tutorial.com/api/cities/${state}`;
    let data = await query(url);
    let cities = data.map(d => d.city_name);
    return cities;
}

async function query(url){
    let response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    });
    
    let data = await response.json();
    return data;
}


// anything below this comment is only for retrieving the API KEY PLEASE DISREGARD
// if you need a new api key go to this website https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
// use a 10 minute email to get a new api key, dont give them your real email lmao
export async function getApiKey(){
    let req = await fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
        headers: {
            "Accept": "application/json",
            "api-token": "AY4x2tZgfuwjJwx22uWUhQZMTXzIhjYaRjqBeBLTf5Ytv3eMprKwAvGVYGEijNcSxrQ",
            "user-email": "luwpbviftjoyrkfxpa@kvhrs.com"
        }
    });

    let response = await req.json();
    console.log(response);
}