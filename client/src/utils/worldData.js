const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJxbWl0Z2Jra3JhaHZxd2VlenBAbnZocncuY29tIiwiYXBpX3Rva2VuIjoiZkIybENmdFVYMFNlbGtJOTVCOXh5NDFRc2hWTS1LUjdVdnZ5Z2dlc1ZGdnc1SzgtREpXczdMQ2cxby1jLTFlakxDRSJ9LCJleHAiOjE2NDE1NjU4NjF9.79cTKC5y_YMA2mfYXnE4Q4FR_pDsMTqE7zI45KyyPmA";

export async function getCountries(){
    let response = await fetch("https://www.universal-tutorial.com/api/countries/", {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    });
    
    let data = await response.json();
    let countries = data.map(d => d.country_name);

    return countries;
}

export async function getStates(country){
    let response = await fetch(`https://www.universal-tutorial.com/api/states/${country}`, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    });
    
    let data = await response.json();
    let states = data.map(d => d.state_name);
    return states;
}

export async function getCities(state){
    let response = await fetch(`https://www.universal-tutorial.com/api/cities/${state}`, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    });
    
    let data = await response.json();
    let cities = data.map(d => d.city_name);
    return cities;
}


// anything below this comment is only for retrieving the API KEY PLEASE DISREGARD
// if you need a new api key go to this website https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
// use a 10 minute email to get a new api key, dont give them your real email lmao
async function getApiKey(){
    let req = await fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
        headers: {
            "Accept": "application/json",
            "api-token": "fB2lCftUX0SelkI95B9xy41QshVM-KR7UvvyggesVFvw5K8-DJWs7LCg1o-c-1ejLCE",
            "user-email": "qmitgbkkrahvqweezp@nvhrw.com"
        }
    });

    let response = await req.json();
    console.log(response);
}