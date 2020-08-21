require('dotenv').config(); // npm i dotenv
import {GraphQLServer} from "graphql-yoga"; // npm i graphql-yoga
import morgan from 'morgan';
import schema from "./schema";
const PORT = process.env.PORT || 4000;

// const typeDefs = `
//     type Query{
//         hello: String!
//     }
// `;
//
// const resolvers = {
//    Query: {
//        hello: () => "Hi"
//    }
// };

// const server = new GraphQLServer({
//     typeDefs,
//     resolvers
// });
const server = new GraphQLServer({schema});

server.express.use(morgan('dev')); // graphqlServer has express server underneath it

server.start({port: PORT}, () => {
    `Server running on http://localhost:${PORT}`;
});