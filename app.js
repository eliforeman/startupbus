// create an express app
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { getFitBitUpdate } = require('./api/fitbit');
const axios = require('axios');

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhKTlEiLCJzdWIiOiJCNEtWN0siLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjYxNjE3NjM3LCJpYXQiOjE2NTkwMjU2Mzd9.b8PepMhrMTL4SIe7ANayzi-1VsqP968J04bcAm31Tlc"
axios.defaults.headers.common['Authorization'] = "Bearer " + access_token;

const api_data = {
  "fitbit_completion" : true,
  "fitbit_steps": 20
}

setInterval(async () => {
  const updatedValue = await getFitBitUpdate
  const updatedValueInt = parseInt(updatedValue)
  api_data["fitbit_steps"] = updatedValueInt 
},60000); 

// welcome page / landing page 
app.get('/', (req, res) => {
  res.render('index', { title: '21 Days', message: 'An interactive gaming experience with micro transactions paid for in sweat.' })
});

// endpoint for the game to get fitness data 
app.get('/api', (req, res) => {
  res.send(api_data) 
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));