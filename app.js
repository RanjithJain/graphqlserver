const express=require("express");
const graphqlHTTP=require("express-graphql");
const app=express();
const mongoose = require('mongoose');
const schema=require('./schema/schema');
const cors=require('cors');


// connect to mlab database
// make sure to replace my db string & creds with your own

/*
const uri = "mongodb+srv://ranjith:ranjith@gql-s98fc.mongodb.net/ranjithgql?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("ranjithgql").collection("ranjithgqlc");
  console.log('connected to db');
  // perform actions on the collection object
  client.close();
});
*/

app.use(cors());
mongoose.connect('mongodb+srv://ranjith:ranjith@gql-s98fc.mongodb.net/ranjithgql?retryWrites=true&w=majority', {
  useNewUrlParser: true
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true

}));

app.listen(4000,()=>{

    console.log("Now listening to request on port 4000");
})
