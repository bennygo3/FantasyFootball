require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const connectDatabase = require('./config/connection.js');
const cors = require('cors');
const helmet = require('helmet');

const apiRoutes = require('./routes/api.js')
const authRoutes = require('./routes/authRoutes.js');
const teamRoutes = require('./routes/teamRoutes.js');
const playerRoutes = require('./routes/playerRoutes.js');

const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers.js');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({ typeDefs, resolvers });

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/teams', teamRoutes);
app.use('/all', playerRoutes);

server.start().then(() => {
    server.applyMiddleware({ app, path: '/graphql' });

    connectDatabase().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            console.log(`GraphQL endpoint available at http://localhost:${PORT}${server.graphqlPath}`);
        });
    }).catch((err) => {
        console.error('Failed to start the server', err);
    });
});
