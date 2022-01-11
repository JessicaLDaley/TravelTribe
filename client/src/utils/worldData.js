import { Country, State, City }  from 'country-state-city';

export function getCountries(){
    let countries = Country.getAllCountries();
    countries = countries.map(country => {
        return {"name": country.name, "code": country.isoCode};
    });
    return countries;
}

export function getStates(countryCode){
    let states = State.getStatesOfCountry(countryCode);
    states = states.map(state => {
        return {"name": state.name, "code": state.isoCode}
    });
    return states;
}

export function getCities(countryCode, stateCode){
    let cities = City.getCitiesOfState(countryCode, stateCode);
    cities = cities.map(city => {
        return {"name": city.name, "coordinates": [+(city.longitude), +(city.latitude)]};
    });
    return cities;
}