import express from 'express';
import projectRoutes from './project/_project_routes';
import bugRoutes from './project/bug/_bug_routes';
import taskRoutes from './project/task/_task_routes';

const router = express.Router();

//* for healthchecks
router.use('/healthcheck', async(req, res) => {
  res.status(200).json({ message: "Accessing API Routes" });
})

/**
 * * api/project...
 */
router.use('/project', projectRoutes);

/**
 * * api/project/:projectId/bug
 */
router.use('/project/:projectId/bug', bugRoutes)

/**
 * * api/project/:projectId/bug
 */
router.use('/project/:projectId/task', taskRoutes);

export default router;