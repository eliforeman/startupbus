// create an express app
const express = require("express");
const app = express();
const path = require("path");
const { getUserProfileData, getWeeklyGoals, getBodyGoals, getDailyGoals } = require('./server/fitbit');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// welcome page 
app.get('/', (req, res) => {
    res.render('index', { title: '21 Days', message: 'An interactive gaming experience with micro transactions paid for in sweat.' })
  });

// user profile
app.get('/userprofile', async function (req,res,next) {
    const userProfile = await getUserProfileData;
    res.send(userProfile)
});

app.get('/weeklygoals', async function(req,res,next) {
  const weeklyGoals = await getWeeklyGoals;
  console.log(weeklyGoals);
})

app.get('/dailygoals', async function(req,res,next){
  const dailyGoals = await getDailyGoals;
  console.log(dailyGoals);
})

app.get('/bodygoals', async function(req,res,next){
  const bodyGoals = await getBodyGoals;
  console.log(bodyGoals);
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));