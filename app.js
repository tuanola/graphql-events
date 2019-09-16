const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose').set('debug', true);

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true
    })
);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@events2-kvw9e.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
    .then( () => {
            app.listen(process.env.PORT || 3030);
    })
    .catch(
        err => {
            console.log(err);
        }
    );
