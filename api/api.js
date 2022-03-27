import axios from "axios";

let urls = {
  test: `http://localhost:3000`,
  development: 'http://localhost:3000/',
  production: 'http://deveser.net:8084'
};

const API = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default API;