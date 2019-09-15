const { buildSchema } = require('graphql');

module.exports = buildSchema(`
        type Event {
            _id: ID!
            title: String!
            description: String!   
            dateFrom: String!   
            dateTo: String!  
            place: Place!  
            persons: [Person!] 
        }
        
        type Place {
            _id: ID!
            city: String!
            country: String!
            continent: String!
            events: [Event!]
        }
        
        type Person {
            _id: ID!
            name: String!
            title: String!
            events: [Event!]
        }
        
        input UserInput {
            city: String!
            country: String!
            continent: String!
        }
        
        input EventInput {
            title: String!
            description: String! 
            dateFrom: String!   
            dateTo: String!
        }
    
        type RootQuery {
            events: [Event!]!
            places: [Place!]!
            persons: [Person!]!
        }

        schema {
            query: RootQuery
        }
    `);
