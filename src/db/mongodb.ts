const mongoose = require('mongoose');
const dbUrl = 'mongodb://172.17.63.113:27017/featureDB';

mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open',()=>{
  console.log(`Connected to ${dbUrl}`);
});
db.on('error',(err:any)=>{
    console.log(err)
});

module.exports = db;