/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import loading from '../src/assets/loading.svg'
import './App.css';

import Map from './components/organisms/map/index'
import mapsService from './services/maps/maps'

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [mapData, setMapData] = useState([]);

  async function getAllMyNetworks() {
    setIsLoading(true);
    mapsService.getAllNetworks().then((res) => {
      const networksLocation = processNetworkLocations(res.data.networks)
      setMapData(networksLocation as any);
    }).catch((_) => {
      alert('Algo de errado ocorreu, tente novamente mais tarde');
    }).finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getAllMyNetworks();
  }, []);

  const handleNetworkMark = (id: string) => {
    mapsService.getAllStationsByNetwork(id).then((res) => {
      const stationsLocation = processStationLocations(res.data.network.stations)
      setMapData(stationsLocation as any)
    }).catch((_) => {
      alert('Algo de errado ocorreu, tente novamente mais tarde');
    })
  }

  /* TODO: As funções processNetworkLocations, e processStationLocations são bem parecidas,
  tirando o fato que é somente o atributo .location de network. Ver maneira de fazer este processamento em uma única função.
  */
  function processNetworkLocations(stations: any[]) {
    return stations.map(item => {
      return {
        id: item.id,
        name: item.name,
        latitude: item.location.latitude,
        longitude: item.location.longitude,
      }
    })
  }

  function processStationLocations(stations: any[]) {
    return stations.map(item => {
      return {
        id: item.id,
        name: item.name,
        latitude: item.latitude,
        longitude: item.longitude,
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
