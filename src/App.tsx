//import { useState } from 'react'
//import { MongoClient } from 'mongodb'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

const MongoClient = require('mongodb').MongoClient;

//const url = 'mongodb://localhost:27017';
const url = CONN_STRING;

//const dbName = 'myProject';
const dbName = CONN_DB;

const collection = CONN_COLLECTION;

MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   console.log('Connected to the database!');

  const dbo = db.db(dbName);

  // Display all data in the 'users' collection
  dbo.collection('users').find({}).toArray(function(err, result) {
    // if (err) throw err;
    // console.log(result);

    // Close the connection
    db.close();
  });
});
    </>
  )
}

export default App
