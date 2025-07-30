import express from 'express';
import readTask from './readTask';
import createTask from './createTask';
import updateTask from './updateTask';
import deleteTask from './deleteTask';

const router = express.Router({mergeParams: true});

router.get('/', readTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;