import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import '../styles.css';
import {Flex} from '@chakra-ui/react';

// this is the map that we will use on the users profile
// profile map will display a history of the users trips
export default function ProfileMap(){
    // dummy data until i link it up to the backend
    // also the backend wont even have data so oof
    const travel_history = [
        {coords: [34.01, -118.49], name: 'Santa Monica', visited: 2018}, 
        {coords: [37.77, -122.43], name: 'San Francisco', visited: 2018}, 
        {coords: [38.84, -104.80], name: 'Colorado Springs', visited: 2015},
        {coords: [36.17, -86.76], name: 'Nashville', visited: 2007},
        {coords: [39.90, 116.38], name: 'Beijing', visited: 2019},
        {coords: [2.05, 45.32], name: 'Mogadishu', visited: 2016},
        {coords: [18.46, -77.91], name: 'Montego Bay', visited: 2020}
    ];

    return(
        <Flex width="100vw" height="25vh" justifyContent="center" m="0 auto">
            <MapContainer center={[50, 0]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {travel_history.map((history, index) => (
                    <Marker position={history.coords} key={index}>
                        <Popup>
                            {history.name}, last visited in {history.visited}.
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Flex>
    );
}

// this is the map that we will use on the dashboard
// dashboard map will display your friends trips/current trips your friends are on
export function DashboardMap(){
    return(
        <Flex width="75vw" height="50vh" justifyContent="center" m="0 auto">
            <MapContainer center={[50, 0]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Flex>
    );
}