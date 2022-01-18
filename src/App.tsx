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
      console.log(res)
      setMapData(res.data.networks);
    }).catch((_) => {
      alert('Algo de errado ocorreu, tente novamente mais tarde');
    }).finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getAllMyNetworks();
  }, []);

  return (
    <div className="App">
      {
        isLoading ? (
          <img src={loading} alt="Carregando mapa" className="loading-image" />
        ) : (
          <div className="map-container">
            <h1 className="title">Mapa de Bikes</h1>

            <Map data={mapData} />
          </div>
        )
      }
    </div >
  );
}

export default App;
