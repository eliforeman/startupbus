const axios = require('axios');

const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhKTlEiLCJzdWIiOiJCNEtWN0siLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjYxNjE3NjM3LCJpYXQiOjE2NTkwMjU2Mzd9.b8PepMhrMTL4SIe7ANayzi-1VsqP968J04bcAm31Tlc"
axios.defaults.headers.common['Authorization'] = "Bearer " + access_token;


const getUserProfileData = axios.get('https://api.fitbit.com/1/user/-/profile.json')
.then((res) => {
    return res.data;
})
.catch((error) => {
  console.error(error)
})

const getWeeklyGoals = axios.get('https://api.fitbit.com//1/user/-/activities/goals/weekly.json')
.then((res) => {
    let weekly = res.data;
    console.log(weekly);
    return res.data;
})
.catch((error) => {
  console.error(error)
})

const getDailyGoals = axios.get('https://api.fitbit.com//1/user/-/activities/goals/daily.json')
.then((res) => {
    let daily = res.data;
    console.log(daily);
    return res.data;
})
.catch((error) => {
  console.error(error)
})


const getBodyGoals = axios.get('https://api.fitbit.com//1/user/-/body/log/weight/goal.json')
.then((res) => {
    let daily = res.data;
    console.log(daily);
    return res.data;
})
.catch((error) => {
  console.error(error)
})


module.exports = { getUserProfileData, getWeeklyGoals, getDailyGoals, getBodyGoals };