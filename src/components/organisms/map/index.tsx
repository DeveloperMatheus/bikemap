import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import './styles.css'

type MapProps = {
    data?: any[],
    placeNetworkMarkerId: (id: string) => void
};

export default function Map({ data, placeNetworkMarkerId }: MapProps) {

    return (
        <MapContainer style={{ height: 500, width: 700 }} center={[51.505, -0.09]} zoom={2}>
            <LayersControl position="topright">

                <LayersControl.BaseLayer checked name="L1">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="L2">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="L3">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                {
                    data?.map((item, index: number) => (
                        <Marker eventHandlers={{
                            click: () => placeNetworkMarkerId(item.id)
                        }} key={index} position={[item.location.latitude, item.location.longitude]}>
                            <Popup>
                                {item.name} - {item.location.country}
                            </Popup>
                        </Marker>
                    ))
                }
            </LayersControl>
        </MapContainer>
    )
}