import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './styles.css'

export default function Map() {
    return (
        <div className='map-container'>
            <MapContainer style={{ height: 600, width: 700 }} center={[51.505, -0.09]} zoom={2}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div >
    )
}