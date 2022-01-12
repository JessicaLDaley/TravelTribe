import React from 'react';
import {Link} from 'react-router-dom';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import '../../styles.css';
import {Flex} from '@chakra-ui/react';

export default function ProfileMap({trips}){
    return(
        <Flex width="100vw" height="25vh" justifyContent="center" m="0 auto">
            <MapContainer center={[50, 0]} zoom={2} scrollWheelZoom={true}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {trips.map(trip => (
                    <Marker position={trip.tripCoordinates} key={trip._id}>
                        <Popup>
                            <p>
                                {trip.tripDestination}
                                <br/>
                                Last visited: {trip.tripReturn}.
                            </p>
                            <Link to={`/trip/${trip._id}`}>View Trip Details</Link>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Flex>
    );
}