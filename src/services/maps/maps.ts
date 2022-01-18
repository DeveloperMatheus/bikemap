/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseURL = "http://api.citybik.es/v2";

export default {
  getAllNetworks() {
    return axios
      .get(`${baseURL}/networks`)
  },
  getAllStationsByNetwork(networkId: string) {
    return axios
      .get(`${baseURL}/networks/${networkId}`)
  },
}