const express = require('express');
const app = express();
const moment = require('moment'); 
const cors = require("cors");

app.use(cors()); 

app.get('/', (req, res) => {
    const data = {
        "email": "aflyinghobos2nd@gmail.com", 
        "current_datetime": moment().utc().format('YYYY-MM-DDTHH:mm:ssZ'), 
        "github_url": "https://github.com/icedoutskay/simplle-api" 
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.status(200).json(data);
});

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;