// cd Horizons-GraphQL init -ynpm install express express-graphql graphql

// Based on this GraphQL intro/documentation: https://graphql.org/graphql-js/object-types/
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema');
const app = express();

app.use(  
    "/graphql", graphqlHTTP({    
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {  
    console.log("Now listening on port 3000");
});