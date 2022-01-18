/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import loading from '../src/assets/loading.svg'
import './App.css';

import Map from './components/organisms/map/index'
import { MapData, Network, Station } from './models/mapData';
import mapsService from './services/maps/maps'

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [mapData, setMapData] = useState<MapData[]>();

  async function getAllMyNetworks() {
    setIsLoading(true);
    mapsService.getAllNetworks().then((res) => {
      const networksLocation = processNetworkLocations(res.data.networks)
      setMapData(networksLocation);
    }).catch((_) => {
      alert('Algo de errado ocorreu, tente novamente mais tarde');
    }).finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getAllMyNetworks();
  }, []);

  const handleNetworkMark = (id: string, type: string) => {
    if (type === 'network') {
      mapsService.getAllStationsByNetwork(id).then((res) => {
        const stationsLocation = processStationLocations(res.data.network.stations)
        setMapData(stationsLocation)
      }).catch((_) => {
        alert('Algo de errado ocorreu, tente novamente mais tarde');
      })
    }
  }

  /* TODO: As funções processNetworkLocations, e processStationLocations são bem parecidas,
  Ver maneira de fazer este processamento em uma única função.
  */
  function processNetworkLocations(stations: Network[]) {
    return stations.map((item: Network) => {
      return {
        id: item.id,
        name: item.name,
        latitude: item.location.latitude,
        longitude: item.location.longitude,
        type: 'network'
      }
    })
  }

  function processStationLocations(stations: Station[]) {
    return stations.map((item: Station) => {
      return {
        id: item.id,
        name: item.name,
        latitude: item.latitude,
        longitude: item.longitude,
        free_bikes: item.free_bikes,
        empty_slots: item.empty_slots,
        type: 'station'
      }
    })
  }

  return (
    <div className="App">
      {
        isLoading ? (
          <img src={loading} alt="Carregando mapa" className="loading-image" />
        ) : (
          <div className="map-container">
            <h1 className="title">Mapa de Bikes</h1>

            <Map data={mapData} placeNetworkMarkerId={handleNetworkMark} />
          </div>
        )
      }
    </div >
  );
}

export default App;
