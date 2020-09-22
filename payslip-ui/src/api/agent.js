import axios from 'axios';
axios.defaults.baseURL = 'https://api.mocki.io/v1/c9d57f59';

const responseBody = (response) => response.data;

const sleep = (ms) => (response) =>
  new Promise((resolve) => setTimeout(() => resolve(response), ms));

const request = {
  get: (url) => axios.get(url).then(sleep(1500)).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
};

const Users = {
  list: () => request.get(),
  details: (id) => request.get(`/employee/${id}/`),
  create: (user) => request.post('/employee', user),
  update: (user, id) => request.put(`/employee/${id}`, user),
};

export default { Users };
