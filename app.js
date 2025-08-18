const axios = require("axios")
const express = require("express")
const app = express()
const getChartData = require("./utils/getChartData");
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", async (req, res) => {
    const username = 'coalition';
    const password = 'skills-test';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        })
        .then(response => {
            const chartData = getChartData(response.data, "Jessica Taylor");
            res.render("home", {
                patients: response.data,
                chartData:chartData
            })
            // console.log('Response data:', response.data);
        })
        .catch(error => {
            console.error('Error making request:', error.message);
        });

})



app.listen(3000, (req, res) => {
    console.log("server running on port 3000");

})
