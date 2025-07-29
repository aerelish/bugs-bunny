import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRoutes from '@/routes/apiRoutes';

const server = express();

const PORT = process.env.PORT || 3000;

server.use(cors()); // ! change this for production

/**
 * * Middlewares
 */
server.use(morgan('common'));
server.use(express.json());

/**
 * * API Routes
 */
server.use('/api', apiRoutes)

/**
 * * Start Server
 */
server.listen(PORT, () => {
  console.log(`Server is now running on PORT:${PORT}`)
});