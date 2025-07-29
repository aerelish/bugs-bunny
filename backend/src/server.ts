import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const server = express();

const PORT = process.env.PORT || 3000;

server.use(cors()); // ! change this for production

/**
 * * Middlewares
 */
server.use(morgan('common'));
server.use(express.json());

/**
 * * Routes
 */

/**
 * * Start Server
 */
server.listen(PORT, () => {
  console.log(`Server is now running on PORT:${PORT}`)
});