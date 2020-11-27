const express = require('express');
var {graphqlHTTP} = require('express-graphql');

const schemas = require('./src/schemas')
const graphql_router = require('./src/graph_adapter');
const port = process.env.PORT || 8000;

app = express();

app.use('/gphl',graphqlHTTP({
    schema:schemas,
    rootValue:graphql_router,
    graphql:true
}));

app.listen(port,'localhost',()=>{
    console.log('listening on port '+port);
})