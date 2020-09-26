import axios from 'axios';
// axios.defaults.baseURL = 'https://api.devcompiler.in/api';
axios.defaults.baseURL = 'http://localhost:5000/api';
const responseBody = (response) => response.data;

const sleep = (ms) => (response) =>
  new Promise((resolve) => setTimeout(() => resolve(response), ms));

const request = {
  // get: (url) => axios.get(url).then(sleep(1500)).then(responseBody),
  post: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
};

const Users = {
  list: () => request.post('/employee/getListEmp'),
  statList: () => request.post('/employee/designationCount'),
  details: (id) => request.post(`/employee/getEmpId/${id}/`),
  create: (user) => request.post('/employee/createEmp', user),
  update: (user, id) => request.put(`/employee/${id}`, user),
};
const Payslip = {
  list: (id) => request.post(`/payslip/all/${id}/`),
  create: (payslip) => request.post('/payslip/createPayslip', payslip),
};

export default { Users, Payslip };
