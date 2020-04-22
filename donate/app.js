//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/stockPharmacie');

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://khouloud:khouloud12@don-cluster-9nilh.mongodb.net/donBD?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("donBD").collection("liste");
  // perform actions on the collection object
  client.close();
});*/

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017')
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error in database connection'+ err);
    }
    
});

//port
const port = 3000;

//add middlware -cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api/', route);

//testing server
app.get('/',(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('server started at port: '+ port);
});