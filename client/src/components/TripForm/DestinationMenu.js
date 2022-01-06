import React, {useState, useEffect} from "react";
import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import {getCountries, getStates, getCities} from '../../utils/worldData';

function DestinationMenu(){
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState();
    const [selectedCity, setSelectedCity] = useState();

    useEffect(() => {
        const loadCountries = async () => {
            setCountries(await getCountries());
        }
        loadCountries();
    });

    useEffect(() => {
        const loadStates = async () => {
            setStates(await getStates(selectedCountry));
        }
        loadStates();
    }, [selectedCountry]);

    useEffect(() => {
        const loadCities = async () => {
            setCities(await getCities(selectedState));
        }
        loadCities();
    }, [selectedState]);

    return(
        <FormControl pb={1} isRequired>
            <FormLabel htmlFor='country'>Trip Destination</FormLabel>
            <Select id='country' placeholder='Select country' pb={1} onChange={(e) => setSelectedCountry(e.target.value)}>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </Select>

            <Select id='state' placeholder='Select state' pb={1} onChange={(e) => setSelectedState(e.target.value)}>
                {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </Select>

            <Select id='city' placeholder='Select city' pb={1} onChange={(e) => setSelectedCity(e.target.value)}>
                {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </Select>
        </FormControl>
    );
}

export default DestinationMenu;