const axios = require('axios');

const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhKTlEiLCJzdWIiOiJCNEtWN0siLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjYxNjE3NjM3LCJpYXQiOjE2NTkwMjU2Mzd9.b8PepMhrMTL4SIe7ANayzi-1VsqP968J04bcAm31Tlc"
axios.defaults.headers.common['Authorization'] = "Bearer " + access_token;

const getFitBitUpdate = axios.get('https://api.fitbit.com/1/user/-/activities/steps/date/today/1d/1min.json').then((res) => {
  return res.data["activities-steps"][0].value;
})
.catch((error) => {
console.error(error)
})


module.exports = { getFitBitUpdate };