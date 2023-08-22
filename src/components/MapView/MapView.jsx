import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';

const MapView = () => {
    const { locations, status } = useSelector((state) => state.location);
    console.log('locations', locations);
    return (
        <MapContainer center={[-16.5, -68.15]} zoom={12}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations &&
                locations.map((location) => {
                    console.log('id', location.id);
                    return (
                        <Marker position={[location.latitude, location.longitude]} key={location.id}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    );
                })}
        </MapContainer>
    );
};

export default MapView;
