// third party libraries
const axios = require('axios').default;

const rootApi = 'http://localhost:3001';

export const http = (method: string, url: string, data?: Object) => axios({
  method,
  data,
  url: `${rootApi}/${url}`
});
