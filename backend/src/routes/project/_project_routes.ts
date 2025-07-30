import express from 'express';
import readProjects from './readProjects';
import createProject from './createProject';
import updateProject from './updateProject';
import deleteProject from './deleteProject';

const router = express.Router();

router.get('/', readProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;