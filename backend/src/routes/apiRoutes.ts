import express from 'express';
import projectRoutes from './project/_project_routes';

const router = express.Router();

//* for healthchecks
router.use('/healthcheck', async(req, res) => {
  res.status(200).json({ message: "Accessing API Routes" });
})

/**
 * * api/project...
 */
router.use('/project', projectRoutes);


export default router;