const getFitBitUpdates() = setInterval(function() {
    const updateFitBitValue = axios.get('https://api.fitbit.com/1/user/-/activities/distance/date/today/1d/15min.json').then((res) => {
    api_data.fitbit_completion = res.data["activities-distance"][0].value;
    return api_data;
  })
  .catch((error) => {
  console.error(error)
  });