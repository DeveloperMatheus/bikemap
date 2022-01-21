import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapData } from "../../../models/mapData";
import './styles.css'

type MapProps = {
    data?: MapData[],
    placeNetworkMarkerId: (id: string, type: string) => void
};

export default function Map({ data, placeNetworkMarkerId }: MapProps) {

    return (
        <div data-testid="my-map" aria-hidden="true">
            <MapContainer style={{ height: 450, width: 650 }} center={[51.505, -0.09]} zoom={5}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data?.map((item, index: number) => (
                        <Marker eventHandlers={{
                            click: () => placeNetworkMarkerId(item.id, item.type),
                            mouseover: (e) => e.target.openPopup()
                        }}
                            key={index} position={[item.latitude, item.longitude]}>
                            <Popup>
                                {item.name}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}