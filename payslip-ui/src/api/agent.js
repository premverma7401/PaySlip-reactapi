import axios from 'axios';
// axios.defaults.baseURL = 'https://devcompiler.in/api';
axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response) => response.data;

const sleep = (ms) => (response) =>
  new Promise((resolve) => setTimeout(() => resolve(response), ms));

const request = {
  // get: (url) => axios.get(url).then(sleep(1500)).then(responseBody),
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
};

const Users = {
  list: () => request.get('/employee/'),
  statList: () => request.get('/employee/designationCount'),
  details: (id) => request.get(`/employee/${id}/`),
  create: (user) => request.post('/employee', user),
  update: (user, id) => request.put(`/employee/${id}`, user),
};
const Payslip = {
  list: (id) => request.get(`/payslip/all/${id}/`),
};

export default { Users, Payslip };
