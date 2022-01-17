/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseURL = "http://api.citybik.es/v2";

export default {
    getAllNetworks() {
        return axios
          .get(`${baseURL}/networks`)
          .then(res => {
            return Promise.resolve(res);
          })
          .catch(err => {
            return Promise.reject(err.response.data);
          });
      },
}