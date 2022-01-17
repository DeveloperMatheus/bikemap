import React, { useEffect, useState } from 'react';
import loading from '../src/assets/loading.svg'
import './App.css';

import Map from './components/organisms/map/index'
import mapsService from './services/maps/maps'

function App() {

  const [isLoading, setIsLoading] = useState(false);

  async function getAllMyNetworks() {
    setIsLoading(true)
    try {
      const res = await mapsService.getAllNetworks();
      console.log(res);
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllMyNetworks();
  }, []);

  return (
    <div className="App">
      {
        isLoading ? (
          <img src={loading} alt="Carregando mapa" />
        ) : (
          <>
            <h1>Mapa de Bikes</h1>

            <Map />
          </>
        )
      }
    </div >
  );
}

export default App;
