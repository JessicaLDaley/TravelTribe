import React from 'react';
import {Link} from 'react-router-dom';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import '../styles.css';
import {Flex} from '@chakra-ui/react';

// this is the map that we will use on the users profile
// profile map will display a history of the users trips
export default function ProfileMap({trips}){
    return(
        <Flex width="100vw" height="25vh" justifyContent="center" m="0 auto">
            <MapContainer center={[50, 0]} zoom={2} scrollWheelZoom={true}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {trips.map(trip => (
                    <Marker position={[]} key={trip._id}>
                        <Popup>
                            {trip.tripDestination}, last visited in {trip.tripReturn}.
                            <Link to={`./trip/${trip._id}`}>View Trip Details</Link>
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