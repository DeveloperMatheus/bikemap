import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './styles.css'

type MapProps = {
    data?: any[]
};

export default function Map({ data }: MapProps) {

    return (
        <div className='map-container'>
            <MapContainer style={{ height: 900, width: 1200 }} center={[51.505, -0.09]} zoom={2}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* {data.map((item: any) => {
                    return <Marker position={[item.location.latitude, item.location.longitude]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                })} */}

                {
                    data?.map(item => (
                        <Marker position={[item.location.latitude, item.location.longitude]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div >
    )
}