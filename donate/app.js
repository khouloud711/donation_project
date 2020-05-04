//importing modules
var express = require('express');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//import routes
const postsRoute = require('./routes/posts');
const  authRoute = require('./routes/auth');


dotenv.config();


//connect to mongoDB
//hatyt link t3 bd toul ly yji f .env fi3oudh process.env.DB_CONNECT
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/',{ useNewUrlParser: true , useUnifiedTopology: true });

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
const port = process.env.PORT || 3000;

//add middlware -cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api/', postsRoute);
app.use('/api/', authRoute);

//testing server
app.get('/',(req,res)=>{
    res.send('hello from server');
});

app.listen(port,()=>{
    console.log('server started at port: '+ port);
});