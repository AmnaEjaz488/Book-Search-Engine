import express from 'express';
import path from 'node:path';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import { authenticateToken } from './services/auth';
import db from './config/connection.js';
import typeDefs from './schemas/typeDefs';
import resolvers from './schemas/resolvers';

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

// Use expressMiddleware for Apollo Server
app.use(
  '/graphql',
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => authenticateToken({ req }),
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`🚀 GraphQL server ready at http://localhost:${PORT}/graphql`);
  });
});
