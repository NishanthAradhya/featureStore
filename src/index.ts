const express = require('express');
const path = require('path');
require('./database/mongo');
const port = 7000;

const app = express();

const featureRoute = require('./routes/feature');

app.use(express.json())

app.use('/api/feature',featureRoute);

app.listen(port,()=>{
    console.log(`App started on port :${port}`);
})

var records =[{id:1,name:'nish'},{id:2,name:'nish'},{id:3,name:'nish'},{id:4,name:'nish'},{id:5,name:'nish'}]
var names=[];
records.map(name=>names.push(name.name))
